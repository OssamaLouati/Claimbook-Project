import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { LoginuserService } from 'src/app/service/loginuser.service';
import { RecommendationService } from 'src/app/service/recommendation.service';
import { User } from 'src/app/user';
import { AcceptinvitationComponent } from '../acceptinvitation/acceptinvitation.component';
import { RejectinvitationComponent } from '../rejectinvitation/rejectinvitation.component';
@Component({
  selector: 'app-sendinvitation',
  templateUrl: './sendinvitation.component.html',
  styleUrls: ['./sendinvitation.component.css']
})
export class SendinvitationComponent {



  modalRef!: MdbModalRef<any>;
  userguest!: User;
  public user$: any = {};
  user:User = new User();
  flag = 0; 
  
  constructor(private recommmendationService: RecommendationService , private http: HttpClient ,private modalService: MdbModalService , private loginuserService:LoginuserService ) {
    this.userguest=recommmendationService.userguest;
  }

  ngOnInit(): void {
    const user = localStorage.getItem("currentUser")
    if (user) {
      this.user$ = JSON.parse(user);  
     
    }
  }
  
  acceptroommate(){
    
    this.recommmendationService.acceptInvitation(this.user$.id, this.userguest.id).subscribe(async (response) => {

      this.user$.roommate=true;
      this.flag = 1;
      // handle success
      const userJson = await localStorage.getItem('currentUser');
      const user = userJson ? JSON.parse(userJson) : {};
      await this.recommmendationService.acceptInvitation(user.id, this.userguest.id).toPromise();
      user.roommate = true;
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.loginuserService.setUser(user);
      this.modalRef= this.modalService.open(AcceptinvitationComponent);
      this.recommmendationService.setFlag(this.flag);
      
      
       
    }, (error) => {
      // handle error
      console.log(error);
    });
    this.user$.roommate=true;
    
  }
  rejectroommate(){
    this.recommmendationService.rejectInvitation(this.user$.id, this.userguest.id).subscribe((response) => {
      // handle success
      console.log(response);
      this.modalRef = this.modalService.open(RejectinvitationComponent);
    }, (error) => {
      // handle error
      console.log(error);
    });

  }

}
function openModal() {
  throw new Error('Function not implemented.');
}

