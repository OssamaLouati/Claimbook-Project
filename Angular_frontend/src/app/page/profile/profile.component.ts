import { ChangeDetectorRef, Component, Output, ViewEncapsulation } from '@angular/core';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { RecommendationComponent } from 'src/app/component/recommendation/recommendation.component';
import { LoginuserService } from 'src/app/service/loginuser.service';
import { RecommendationService } from 'src/app/service/recommendation.service';
import { EditprofileComponent } from '../../component/editprofile/editprofile.component';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/user';
import { AcceptinvitationComponent } from 'src/app/component/acceptinvitation/acceptinvitation.component';
import { SendinvitationComponent } from 'src/app/component/sendinvitation/sendinvitation.component';
import { RejectinvitationComponent } from 'src/app/component/rejectinvitation/rejectinvitation.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  

})
export class ProfileComponent {
  userguest!: User;
  userroommate!: User;
  roommateid!:number;
  roommateavatar!:string;
  roommatename!: string;
  roommatebio!: string;

  modalRef: MdbModalRef<EditprofileComponent> | null = null;
  faBell=faBell;
  public user$: any = {};
  rec= false;
  skills: string[] = [];
  recommended_r!: string[];
  roommate = false;
  imageUrl='assets/images/photo.webp';

  flag = 0;
  roomname = "";
  accept = 0;
  reject = 0;
  
  constructor(private modalService: MdbModalService, private loginuserservice: LoginuserService,  private recommmendationService: RecommendationService) {}

  openModal() {
    this.modalRef = this.modalService.open(EditprofileComponent)
  }
  openModal2() {
    this.modalRef = this.modalService.open(RecommendationComponent)
  }

  openModal3() {
    this.modalRef = this.modalService.open(SendinvitationComponent)
  }

  openModalforeachuser(){
    console.log("function triggereed")
    if(this.userguest!=null && this.user$.invitation!=0){
      this.modalRef = this.modalService.open(SendinvitationComponent)
    }

    if(this.user$.invitationresponse>0){
      this.recommmendationService.getRoommateDetail(Math.abs(this.user$.invitationresponse)).subscribe(
        userroommate => console.log(userroommate),
        err => console.log(err)
      );  
      console.log(this.userguest);
      this.modalRef = this.modalService.open(AcceptinvitationComponent)
    }

    if(this.user$.invitationresponse<0){
      console.log(this.user$.invitationresponse)
      console.log(Math.abs(this.user$.invitationresponse))
      this.recommmendationService.getRoommateDetail(Math.abs(this.user$.invitationresponse)).subscribe(
        userroommate => console.log(userroommate),
        err => console.log(err)
      );

      this.modalRef = this.modalService.open(RejectinvitationComponent)

    }
  }

   ngOnInit() {
    this.openModalforeachuser()
    this.flag = this.recommmendationService.getFlag();
    this.accept=this.recommmendationService.getAccept();
    console.log(this.accept);
    this.reject=this.recommmendationService.getReject();
    this.roomname = this.recommmendationService.getRoomename();
    console.log(this.flag);
    const user = localStorage.getItem("currentUser")
    if (user) {
      this.user$ =  JSON.parse(user);  
      console.log(this.user$)
      if(this.flag==1){
        this.user$.roommate=true;
        this.user$.invitation=0;
      }
      if(this.flag==1 && this.user$.roommate==false){
        this.user$.roommate=true;
      }
      if(this.user$.roommate==false){
        
        this.recommended_r= this.recommmendationService.getRecommendations(this.user$.name);
        console.log(this.recommended_r); 
        
      }

      this.skills = this.user$.skills.replace(/\s+/g, " ").split(" ");
      let index = this.skills.indexOf("");
     
      if(this.user$.avatar!=null){
        this.imageUrl=this.user$.avatar;
      }
    }
  }
 
 
}






