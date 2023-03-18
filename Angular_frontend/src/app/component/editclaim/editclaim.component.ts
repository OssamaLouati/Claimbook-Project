import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editclaim',
  templateUrl: './editclaim.component.html',
  styleUrls: ['./editclaim.component.css']
})
export class EditclaimComponent {
  claim_id: number;
  description: string;
  type: string;
  selectedProblem: string;
  selectedFile: File | null = null;
 

  constructor(private http: HttpClient,private router: Router, public modalRef: MdbModalRef<EditclaimComponent>, private activatedRoute: ActivatedRoute) {
    this.claim_id = activatedRoute.snapshot.params['claim_id'];
    this.description = activatedRoute.snapshot.params['description'];
    this.type = activatedRoute.snapshot.params['type'];
    this.selectedProblem = this.type;
   }

  ngOnInit() {
    console.log('Claim ID:', this.claim_id);
    // Do something with the claim_id
  }
  onSelect(problem: string): void {
    this.selectedProblem = problem;
 }

 onFileSelected(event: any): void {
  if (event.target.files && event.target.files.length > 0) {
    this.selectedFile = event.target.files[0];
  }
 }
 onSubmit(): void{
  const formData = new FormData();
  const stored_user = localStorage.getItem("currentUser"); 
  const user = stored_user ? JSON.parse(stored_user) : {}

  formData.append('student_id', user.id)
  formData.append('id', this.claim_id.toString())
  formData.append('type', this.selectedProblem);
  formData.append('description', this.description);
  if (this.selectedFile) {
    formData.append('picture', this.selectedFile, this.selectedFile.name);
  }
  formData.append('room', user.room);
  formData.append('pavillon', user.pavillon);
  this.http.put('http://localhost:8082/claim', formData).subscribe(
      (response: any) => {
        // handle success
      },
      (error: any) => {
        console.error(error);
      }
      );
  
 }

}
