import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { EditprofileComponent } from '../../component/editprofile/editprofile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent {
  modalRef: MdbModalRef<EditprofileComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(EditprofileComponent)
  }
 
}






