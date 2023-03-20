import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
 
  
  public recommended_roommates!: any[];
  public userguest!: User;
  private flag: number = 0;
  private accept: number = 0;
  private reject: number = 0;
  private roomename: string ="";
  private userroommateSubject = new BehaviorSubject<any>(null);
  public userroommate$ = this.userroommateSubject.asObservable();
  constructor(private http: HttpClient) { }

  public getRecommendations(name: string) {
    this.http.get<any>(`http://localhost:5000/recommend/${name}`).subscribe(
      res => {
        this.recommended_roommates = res.recommended;
        
        
      },
      err => console.log(err)
    );
    console.log(this.recommended_roommates)
    return this.recommended_roommates;
  }

  public sendInvitation( currentUserId: number, roommateName: string): Observable<any> {
    
   return this.http.get<any>('http://localhost:8082/user/sendinvitation/'+currentUserId+'/'+roommateName); 
   
 }

  getRoommateDetails(roommateId: number)  {
    const url = `http://localhost:8082/user/sendinvitationtoroommate/${roommateId}`;
     this.http.get<any>(url).subscribe(
      res => {
        this.userguest = res;
        
        
      },
      err => console.log(err)
    );
    console.log(this.userguest)
    return this.userguest;
  }

  getRoommateDetail(roommateId: number): Observable<any> {
    const url = `http://localhost:8082/user/sendinvitationtoroommate/${roommateId}`;
    return this.http.get<any>(url).pipe(
      tap(res => console.log(res)),
      map(res => {
        this.userroommateSubject.next(res);
                return res;
      }),
      catchError(err => {
        console.log(err);
        return throwError(err);
      })
    );
  }
  

  acceptInvitation(currentuserid:number ,invitationId: number): Observable<any>  {
    return this.http.get<any>(`http://localhost:8082/user/acceptinvitation/${invitationId}/${currentuserid}`);
    
  
  }
  rejectInvitation(currentuserid:number ,invitationId: number): Observable<any>  {
    return this.http.get<any>(`http://localhost:8082/user/rejectinvitation/${invitationId}/${currentuserid}`);
    
  
  }
  sendacceptInvitation(currentuserid:number ,invitationId: string): Observable<any>  {
    return this.http.get<any>(`http://localhost:8082/user/sendacceptinvitation/${invitationId}/${currentuserid}`);
    
  
  }
  sendrejectInvitation(currentuserid:number ,invitationId: string): Observable<any>  {
    return this.http.get<any>(`http://localhost:8082/user/sendrejectinvitation/${invitationId}/${currentuserid}`);
    
  
  }
  sendok(currentuserid:number ): Observable<any>  {
    return this.http.get<any>(`http://localhost:8082/user/sendok/${currentuserid}`);
    
  
  }
  setFlag(flag: number) {
    this.flag = flag;
  }

  getFlag() {
    return this.flag;
  }
  setAccept(accept: number) {
    this.accept = accept;
  }

  getAccept() {
    return this.accept;
  }
  setReject(reject: number) {
    this.reject = reject;
  }

  getReject() {
    return this.reject;
  }
  setRoomname(roomename: string) {
    this.roomename = roomename;
  }

  getRoomename() {
    return this.roomename;
  }
}
