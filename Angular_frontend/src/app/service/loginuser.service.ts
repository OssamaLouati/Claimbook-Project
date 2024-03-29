import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../user';
import { Technician } from '../technician';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private userSubject = new BehaviorSubject<any>(null);
  private TechnicianSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();
  public technician$ = this.TechnicianSubject.asObservable();

  constructor(private httpClient: HttpClient) { 
  
  }

  loginTechnician(email: string, password: string): Observable<any>{
    return this.httpClient.get<any>('http://localhost:8082/technician/'+email+'/'+password);
  }

  loginStudent(email: string ,password: string ): Observable<any>{
    return this.httpClient.get<any>('http://localhost:8082/user/'+email+'/'+password);
  }

  logout(): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8082/user/logout", {});
  }
  
  public setUser(user: any) {
    this.userSubject.next(user);
  }

  public setTechnician(technican: any){
    this.TechnicianSubject.next(technican);
  }

  public clearUser() {
    this.userSubject.next(null);
  }
  updateUser(user: any) {
    this.userSubject.next(user);
  }
}
