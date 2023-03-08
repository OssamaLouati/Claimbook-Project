import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { LoginuserService } from 'src/app/service/loginuser.service';
import { EditprofileComponent } from '../../component/editprofile/editprofile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent {
  modalRef: MdbModalRef<EditprofileComponent> | null = null;
  public user$ = this.loginuserservice.user$;

  constructor(private modalService: MdbModalService, private loginuserservice: LoginuserService) {}

  openModal() {
    this.modalRef = this.modalService.open(EditprofileComponent)
  }
 
}






