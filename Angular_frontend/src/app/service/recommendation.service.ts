import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
 
  
  public recommended_roommates!: any[];
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
}
