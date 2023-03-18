import { Component } from '@angular/core';
import { AsyncPipe, DecimalPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../../claim';
import { ClaimService } from '../../service/claim-service.service';
import { NgbdSortableHeader, SortEvent } from '../../directive/sortable.directive';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { EditclaimComponent } from 'src/app/component/editclaim/editclaim.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
		NgFor,
		DecimalPipe,
		FormsModule,
		AsyncPipe,
		NgbTypeaheadModule,
		NgbdSortableHeader,
		NgbPaginationModule,
		NgIf,
		NgClass,
		MatIconModule,
		
	],
  templateUrl: './claim-list.component.html',
  styleUrls: ['./claim-list.component.css']
})

export class ClaimListComponent{
	//  countries$: Observable<Claim[]>;
	//  total$: Observable<number>;


	@ViewChildren(NgbdSortableHeader)
  	headers!: QueryList<NgbdSortableHeader>;
	modalRef: MdbModalRef<EditclaimComponent> | null = null;
	claims: Claim[] = [];

	constructor(private http: HttpClient,private sanitizer: DomSanitizer, private modalService: MdbModalService ) { //public service: ClaimService
		//  this.countries$ = service.countries$;
		//  this.total$ = service.total$;
	}
	
	 ngOnInit(): void {
		this.getStudentClaims();
		
	}

	getTrustedUrl(url: string): any {
		return this.sanitizer.bypassSecurityTrustUrl(url);
	}

	openModal(claim_id: number, description: string, type: string ) {
		this.modalRef = this.modalService.open(EditclaimComponent, {data: {claim_id, description, type}});
	}

	getStudentClaims(): void {
	 	const stored_user = localStorage.getItem("currentUser"); 
   	 	const user = stored_user ? JSON.parse(stored_user) : {}
	 	const student_id = user.id;
	 	if (student_id) {
	 	  const url = `http://localhost:8082/claims?student_id=${student_id}`;
	 	  this.http.get<Claim[]>(url).subscribe(
	 		data => {
	 		  this.claims = data;
			   this.claims = this.claims.reverse();
	 		},
	 		error => {
	 		  console.log(error);
	 		}
	 	  );
	 	} else {
	 	  console.log('student_id not found in localStorage');
	 	}
	   }

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		//  this.service.sortColumn = column;
		//  this.service.sortDirection = direction;
  }

}
