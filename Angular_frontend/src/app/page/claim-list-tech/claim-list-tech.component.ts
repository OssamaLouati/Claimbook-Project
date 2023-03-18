import { Component } from '@angular/core';
import { AsyncPipe, DecimalPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { Claim } from '../../claim';
import { ClaimService } from '../../service/claim-service.service';
import { NgbdSortableHeader, SortEvent } from '../../directive/sortable.directive';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FinishClaimComponent } from 'src/app/component/finish-claim/finish-claim.component';
import { RejectClaimComponent } from 'src/app/component/reject-claim/reject-claim.component';


@Component({
  selector: 'app-claim-list-tech',
  templateUrl: './claim-list-tech.component.html',
  styleUrls: ['./claim-list-tech.component.css']
})
export class ClaimListTechComponent {
	modalRef: MdbModalRef<FinishClaimComponent> | null = null;
  	claims: Claim[] = [];
  	constructor(private http: HttpClient,private sanitizer: DomSanitizer, private modalService: MdbModalService ) {}

  	ngOnInit(): void {
		this.getAllClaims();  
	}

	openModal(claim_id: number) {
		this.modalRef = this.modalService.open(FinishClaimComponent, {data: {claim_id}});
	}
	openModall(claim_id: number) {
		this.modalRef = this.modalService.open(RejectClaimComponent, {data: {claim_id}});
	}
		  
  	getAllClaims(): void {
    	const stored_technician = localStorage.getItem("currentUser"); 
   		const technician = stored_technician ? JSON.parse(stored_technician) : {}
	 	if (technician.id) {
	 	  const url = `http://localhost:8082/allclaims`;
	 	  this.http.get<Claim[]>(url).subscribe(
	 		data => {
	 		  this.claims = data;
			  this.claims = this.claims;
	 		},
	 		error => {
	 		  console.log(error);
	 		}
	 	  );
	 	} else {
	 	  console.log('student_id not found in localStorage');
	 	}
  	}
}



