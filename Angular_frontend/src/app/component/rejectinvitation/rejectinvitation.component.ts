import { Component, Input, OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { RecommendationService } from 'src/app/service/recommendation.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-rejectinvitation',
  templateUrl: './rejectinvitation.component.html',
  styleUrls: ['./rejectinvitation.component.css']
})
export class RejectinvitationComponent implements OnInit {
  
  
  userroommate: any;
  constructor(private recommmendationService: RecommendationService , public modalRef: MdbModalRef<RejectinvitationComponent>) { 
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
