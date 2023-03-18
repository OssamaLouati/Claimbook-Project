import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-suggestsolution',
  templateUrl: './suggestsolution.component.html',
  styleUrls: ['./suggestsolution.component.css']
})
export class SuggestsolutionComponent {
  prompt!: string;
  response!: string;
  loading = false;

  constructor(private http: HttpClient) { }

  onSubmit(): void {
    this.loading = true;
    const payload = { prompt: this.prompt };
    this.http.post<any>('http://localhost:5000/api/ask', payload).subscribe(data => {
      this.response = data.response;
      this.loading= false;
    });
   
  }

}
