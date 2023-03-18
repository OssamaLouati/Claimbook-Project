import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-deleteclaim',
  templateUrl: './deleteclaim.component.html',
  styleUrls: ['./deleteclaim.component.css']
})
export class DeleteclaimComponent {
  claim_id: number;

  constructor(private http: HttpClient,public modalRef: MdbModalRef<DeleteclaimComponent>, private activatedRoute: ActivatedRoute){
    this.claim_id = activatedRoute.snapshot.params['claim_id'];
  }

  onSubmit(): void{
    const formData = new FormData();
    formData.append('id', this.claim_id.toString())
    const id = this.claim_id.toString();

    const options = {
      headers: new HttpHeaders(),
      body: {
        id: this.claim_id.toString()
      }
    };
    const url = `http://localhost:8082/claim?id=${id}`;
    this.http.delete(url).subscribe(
      (response: any) => {
        // handle success
      },
      (error: any) => {
        // handle error
        console.error(error);
      }
      );
    location.reload();
    
  }

}
