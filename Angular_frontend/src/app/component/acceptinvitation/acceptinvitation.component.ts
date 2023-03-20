import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { RecommendationService } from 'src/app/service/recommendation.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-acceptinvitation',
  templateUrl: './acceptinvitation.component.html',
  styleUrls: ['./acceptinvitation.component.css']
})
export class AcceptinvitationComponent {
  constructor( public modalRef: MdbModalRef<AcceptinvitationComponent>) { }
  goToPage() {
    
    this.modalRef.close();
    location.reload();
  }

}
