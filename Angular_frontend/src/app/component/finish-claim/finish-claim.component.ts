import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-finish-claim',
  templateUrl: './finish-claim.component.html',
  styleUrls: ['./finish-claim.component.css']
})
export class FinishClaimComponent {
  constructor(public modalRef: MdbModalRef<FinishClaimComponent>) {}

}
