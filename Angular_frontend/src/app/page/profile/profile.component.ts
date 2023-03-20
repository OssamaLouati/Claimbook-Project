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

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  

})
export class ProfileComponent {
  userguest!: User;
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
  constructor(private modalService: MdbModalService, private loginuserservice: LoginuserService,  private recommmendationService: RecommendationService) {}

  openModal() {
    this.modalRef = this.modalService.open(EditprofileComponent)
  }
  openModal2() {
    this.modalRef = this.modalService.open(RecommendationComponent)
  }
  openModal4() {
    this.modalRef = this.modalService.open(SendinvitationComponent)
  }

   ngOnInit() {
    this.flag = this.recommmendationService.getFlag();
    console.log(this.flag);
    const user = localStorage.getItem("currentUser")
    if (user) {
      this.user$ =  JSON.parse(user);  
      if(this.flag==1){
        this.user$.roommate=true;
      }
      if(this.flag==1 && this.user$.roommate==false){
        this.user$.roommate=true;
      }
      if(this.user$.roommate==false){
        
        this.recommended_r= this.recommmendationService.getRecommendations(this.user$.name);
        console.log(this.recommended_r); 
        
      }
      
      if(this.user$.roommate==true){
        
        this.recommended_r= [];
        console.log(this.recommended_r); 
        
      }
      if(this.user$.invitation!=0){
        this.userguest=this.recommmendationService.getRoommateDetails(this.user$.invitation);
        console.log(this.recommmendationService.getRoommateDetails(this.user$.invitation))
          
        
        console.log(this.user$);
        console.log(user);
        

        
      }
     

      
       // force change detection to update the view
      this.skills = this.user$.skills.replace(/\s+/g, " ").split(" ");
      let index = this.skills.indexOf("");
     
      if(this.user$.avatar!=null){
        this.imageUrl=this.user$.avatar;
      }
    }
  }
 
}






