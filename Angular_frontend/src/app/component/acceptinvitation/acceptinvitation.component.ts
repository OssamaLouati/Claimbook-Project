import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { LoginuserService } from 'src/app/service/loginuser.service';
import { RecommendationService } from 'src/app/service/recommendation.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-acceptinvitation',
  templateUrl: './acceptinvitation.component.html',
  styleUrls: ['./acceptinvitation.component.css']
})
export class AcceptinvitationComponent {
  userroommate: any;
  user:User = new User();
  public user$: any = {};
  constructor( private recommmendationService: RecommendationService ,private loginuserService:LoginuserService , public modalRef: MdbModalRef<AcceptinvitationComponent>) {
   }
  
  ngOnInit() {
    this.recommmendationService.userroommate$.subscribe(
      userroommate => this.userroommate = userroommate
    );
    const user = localStorage.getItem("currentUser")
    if (user) {
      this.user$ = JSON.parse(user);  
     
    }
  }
  goToPage() {
    
    this.modalRef.close();
    this.recommmendationService.sendok(this.user$.id).subscribe(async (response) => {
      // handle success
      console.log(response);
      this.user$.invitationresponse=0;
      
      // handle success
    
      const userJson = await localStorage.getItem('currentUser');
      const user = userJson ? JSON.parse(userJson) : {};
      
      user.invitationresponse = 0;
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.loginuserService.setUser(user);
     
      
      location.reload();
    }, (error) => {
      // handle error
      console.log(error);
    });

    
  }

}
