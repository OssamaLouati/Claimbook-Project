import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-rejectinvitation',
  templateUrl: './rejectinvitation.component.html',
  styleUrls: ['./rejectinvitation.component.css']
})
export class RejectinvitationComponent {
  constructor( public modalRef: MdbModalRef<RejectinvitationComponent>) { }
  goToPage() {
    
    this.modalRef.close();
  }
}
