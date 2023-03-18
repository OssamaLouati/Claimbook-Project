import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-successupdateclaim',
  templateUrl: './successupdateclaim.component.html',
  styleUrls: ['./successupdateclaim.component.css']
})
export class SuccessupdateclaimComponent {
  constructor(public modalRef: MdbModalRef<SuccessupdateclaimComponent>) {}

}
