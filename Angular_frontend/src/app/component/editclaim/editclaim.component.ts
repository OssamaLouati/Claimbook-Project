import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

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
 

  constructor(private router: Router, public modalRef: MdbModalRef<EditclaimComponent>, private activatedRoute: ActivatedRoute) {
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
 onSubmit(){
  
 }

}
