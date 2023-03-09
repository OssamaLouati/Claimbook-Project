import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  userName!: string;
  recommendations!: string[];
  constructor(private http: HttpClient) { }

  public getRecommandation() {
    const requestBody = { name: this.userName };
    this.http.post('/recommendation', requestBody).subscribe((response: any) => {
      this.recommendations = response.recommendations;
    });
  }
}
