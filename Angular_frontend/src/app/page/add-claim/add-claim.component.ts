import { User } from 'src/app/user';
import { Component , OnInit , Input , Output } from '@angular/core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { CLAIMS } from 'src/app/claims';
import { Claim } from 'src/app/claim';
import { ClaimService } from 'src/app/service/claim-service.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent {
  faCamera=faCamera
  claims$: Observable<Claim[]>;
  selectedProblem: string;
  selectedFile: File | null = null;
  description: string = '';

  constructor(
    private http: HttpClient,
    public claimService : ClaimService
    ) { 
      this.claims$ = claimService.countries$;
      this.selectedProblem = 'wifi';
      
    }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(): void {
    const formData = new FormData();
    const stored_user = localStorage.getItem("currentUser"); // retrieve JSON string from localStorage
    const user = stored_user ? JSON.parse(stored_user) : {}

    formData.append('student_id', user.id)
    formData.append('type', this.selectedProblem);
    formData.append('description', this.description);
    if (this.selectedFile) {
      formData.append('picture', this.selectedFile, this.selectedFile.name);
    }

    this.http.post('http://localhost:8082/upload', formData).subscribe(
      (response: any) => {
        console.log(response.url);
        // save the response.url to MySQL along with the description
      }
    );
  }

}
