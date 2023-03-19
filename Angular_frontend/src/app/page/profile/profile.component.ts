import { ChangeDetectorRef, Component, Output, ViewEncapsulation } from '@angular/core';

import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { RecommendationComponent } from 'src/app/component/recommendation/recommendation.component';
import { LoginuserService } from 'src/app/service/loginuser.service';
import { RecommendationService } from 'src/app/service/recommendation.service';
import { EditprofileComponent } from '../../component/editprofile/editprofile.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],

})
export class ProfileComponent {
  modalRef: MdbModalRef<EditprofileComponent> | null = null;
  
  public user$: any = {};
  rec= false;
  skills: string[] = [];
  recommended_r!: string[];
  roommate = false;
  imageUrl='assets/images/photo.webp';

  constructor(private modalService: MdbModalService, private loginuserservice: LoginuserService, private cdr: ChangeDetectorRef, private recommmendationService: RecommendationService) {}

  openModal() {
    this.modalRef = this.modalService.open(EditprofileComponent)
  }
  openModal2() {
    this.modalRef = this.modalService.open(RecommendationComponent)
  }

  
 
  ngOnInit(): void {
    const user = localStorage.getItem("currentUser")
    if (user) {
      this.user$ = JSON.parse(user);  
      if(this.user$.roommate==false){
        this.recommended_r=this.recommmendationService.getRecommendations(this.user$.name);
        console.log(this.recommended_r);
      }
      

      
      this.cdr.detectChanges(); // force change detection to update the view
      this.skills = this.user$.skills.replace(/\s+/g, " ").split(" ");
      let index = this.skills.indexOf("");
     
      if(this.user$.avatar!=null){
        this.imageUrl=this.user$.avatar;
      }
    }
  }
 
}






