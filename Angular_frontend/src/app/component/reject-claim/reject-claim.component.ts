import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-reject-claim',
  templateUrl: './reject-claim.component.html',
  styleUrls: ['./reject-claim.component.css']
})
export class RejectClaimComponent {
  constructor(public modalRef: MdbModalRef<RejectClaimComponent>) {}

}
