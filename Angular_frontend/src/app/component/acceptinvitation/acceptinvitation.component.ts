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
  userroommate: any;
  constructor( private recommmendationService: RecommendationService ,public modalRef: MdbModalRef<AcceptinvitationComponent>) {
   }
  goToPage() {
    
    this.modalRef.close();
    
  }
  ngOnInit() {
    this.recommmendationService.userroommate$.subscribe(
      userroommate => this.userroommate = userroommate
    );
  }


}
