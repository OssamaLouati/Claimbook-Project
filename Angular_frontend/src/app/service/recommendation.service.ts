import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
 
  
  public recommended_roommates!: any[];
  public userguest!: User;
  private flag: number = 0;
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

  acceptInvitation(currentuserid:number ,invitationId: number): Observable<any>  {
    return this.http.get<any>(`http://localhost:8082/user/acceptinvitation/${invitationId}/${currentuserid}`);
    
  
  }
  rejectInvitation(currentuserid:number ,invitationId: number): Observable<any>  {
    return this.http.get<any>(`http://localhost:8082/user/rejectinvitation/${invitationId}/${currentuserid}`);
    
  
  }
  setFlag(flag: number) {
    this.flag = flag;
  }

  getFlag() {
    return this.flag;
  }
}
