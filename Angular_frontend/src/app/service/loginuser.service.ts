import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private httpClient: HttpClient) { 
  
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

  public clearUser() {
    this.userSubject.next(null);
  }
  
}
