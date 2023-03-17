 import { Injectable, PipeTransform } from '@angular/core';
 import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
 import { Claim } from '../claim';
 import { DecimalPipe } from '@angular/common';
 import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
 import { SortColumn, SortDirection } from '../directive/sortable.directive';
 import {HttpClient , HttpHeaders } from '@angular/common/http'
 interface SearchResult {
 	countries: Claim[];
 	total: number;
 }
 interface State {
 	page: number;
 	pageSize: number;
 	searchTerm: string;
 	sortColumn: SortColumn;
 	sortDirection: SortDirection;
 }
 const compare = (v1: string | string | Date | string | String | number | number, v2: string | string | Date | string | String | number | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
 function sort(countries: Claim[], column: SortColumn, direction: string): Claim[] {
 	if (direction === '' || column === '') {
 		return countries;
 	} else {
 		return [...countries].sort((a, b) => {
 			const res = compare(a[column], b[column]);
 			return direction === 'asc' ? res : -res;
 		});
 	}
 }
 function matches(country: Claim, term: string, pipe: PipeTransform) {
 	return (
 		country.id ||
 		country.student_id || 
 		country.type.toString().toLowerCase().includes(term.toLowerCase()) || 
 		country.description.toString().toLowerCase().includes(term.toLowerCase()) || 
 		country.dateCreated.toString().toLowerCase().includes(term.toLowerCase()) || 
 		country.state.toString().toLowerCase().includes(term.toLowerCase()) || 
 		country.picture_url.toString().toLowerCase().includes(term.toLowerCase()) || 
 		country.room.toString().toLowerCase().includes(term.toLowerCase()) ||  
 		country.pavillon.toString().toLowerCase().includes(term.toLowerCase())
 	);
 }
 @Injectable({ providedIn: 'root' })
 export class ClaimService {
 	private _loading$ = new BehaviorSubject<boolean>(true);
 	private _search$ = new Subject<void>();
 	private _countries$ = new BehaviorSubject<Claim[]>([]);
	claims: Claim[] = [];

 	private _total$ = new BehaviorSubject<number>(0);
 	private _state: State = {
 		page: 1,
 		pageSize: 4,
 		searchTerm: '',
 		sortColumn: '',
 		sortDirection: '',
 	};
	  
 	constructor(private pipe: DecimalPipe , private http:HttpClient) {
 		this._search$
 			.pipe(
 				tap(() => this._loading$.next(true)),
 				debounceTime(200),
 				switchMap(() => this._search()),
 				delay(200),
 				tap(() => this._loading$.next(false)),
 			)
 			.subscribe((result) => {
 				this._countries$.next(result.countries);
 				this._total$.next(result.total);
 			});
 		this._search$.next();
 	}
 	// getClaims() : Observable<Claim[]>{
	// 	const stored_user = localStorage.getItem("currentUser");
	// 	const user = stored_user ? JSON.parse(stored_user) : {}
	// 	const student_id = user.id;
	// 	const apiUrl = `http://localhost:8082/claims?student_id=${student_id}`;
 	// 	return this.http.get<Claim[]>(apiUrl)
 	// }
	 
	  
	 getStudentClaims(): void {
	 	const stored_user = localStorage.getItem("currentUser"); 
   	 	const user = stored_user ? JSON.parse(stored_user) : {}
	 	const student_id = user.id;
	 	if (student_id) {
	 	  const url = `http://localhost:8082/claims?student_id=${student_id}`;
	 	  this.http.get<Claim[]>(url).subscribe(
	 		data => {
				this.claims = data;
				console.log("data jat m9ada");
	 		},
	 		error => {
	 		  console.log(error);
	 		}
	 	  );
	 	} else {
	 	  console.log('student_id not found in localStorage');
	 	}
	   }
 	get countries$() {
 		return this._countries$.asObservable();
 	}
 	get total$() {
 		return this._total$.asObservable();
 	}
 	get loading$() {
 		return this._loading$.asObservable();
 	}
 	get page() {
 		return this._state.page;
 	}
 	get pageSize() {
 		return this._state.pageSize;
 	}
 	get searchTerm() {
 		return this._state.searchTerm;
 	}
 	set page(page: number) {
 		this._set({ page });
 	}
 	set pageSize(pageSize: number) {
 		this._set({ pageSize });
 	}
 	set searchTerm(searchTerm: string) {
 		this._set({ searchTerm });
 	}
 	set sortColumn(sortColumn: SortColumn) {
 		this._set({ sortColumn });
 	}
 	set sortDirection(sortDirection: SortDirection) {
 		this._set({ sortDirection });
 	}
 	private _set(patch: Partial<State>) {
 		Object.assign(this._state, patch);
 		this._search$.next();
 	}
 	private _search(): Observable<SearchResult> {
 		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
 		// 1. sort
 		let countries = sort(this.claims, sortColumn, sortDirection);
 		// 2. filter
 		countries = countries.filter((country) => matches(country, searchTerm, this.pipe));
 		const total = countries.length;
 		// 3. paginate
 		countries = countries.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
 		return of({ countries, total });
 	}
 }