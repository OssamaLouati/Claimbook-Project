import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-finish-claim',
  templateUrl: './finish-claim.component.html',
  styleUrls: ['./finish-claim.component.css']
})
export class FinishClaimComponent {
  claim_id: number;
 
  constructor(private http: HttpClient,private router: Router,public modalRef: MdbModalRef<FinishClaimComponent>,private activatedRoute: ActivatedRoute) {
    this.claim_id = activatedRoute.snapshot.params['claim_id'];
  }


  finishClaim(): void{
    const formData = new FormData();
    const stored_user = localStorage.getItem("currentUser"); 
    const user = stored_user ? JSON.parse(stored_user) : {}
    formData.append('id', this.claim_id.toString())
    formData.append('interfering_tech	', user.id)
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
