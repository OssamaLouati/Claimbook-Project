import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reject-claim',
  templateUrl: './reject-claim.component.html',
  styleUrls: ['./reject-claim.component.css']
})
export class RejectClaimComponent {
  claim_id: number;
  constructor(private http: HttpClient,private router: Router,public modalRef: MdbModalRef<RejectClaimComponent>,private activatedRoute: ActivatedRoute) {
    this.claim_id = activatedRoute.snapshot.params['claim_id'];
  }

  rejectClaim(): void{
    const formData = new FormData();
    const stored_user = localStorage.getItem("currentUser"); 
    const user = stored_user ? JSON.parse(stored_user) : {}
    formData.append('id', this.claim_id.toString())
    this.http.put("http://localhost:8082/finish_claim",formData).subscribe(
      (response: any) => {
        // handle success
      },
      (error: any) => {
        // handle error
        console.error(error);
      }
      );
    
    location.reload()
    this.modalRef.close();
    
  }

}
