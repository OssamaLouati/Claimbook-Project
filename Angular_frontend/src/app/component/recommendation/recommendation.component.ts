import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { RecommendationService } from 'src/app/service/recommendation.service';
@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent {
  recommended_r!: string[];
  currentUserId!: number;
  selectedRoommateName!: string;
  invitationId!: number;
  invitationSent = false;
  roommatename="";
  public user$: any = {};
  
  constructor(public modalRef: MdbModalRef<RecommendationComponent> ,private recommmendationService: RecommendationService , private http: HttpClient ) {
    this.recommended_r=recommmendationService.recommended_roommates;
  }

  sendInvitation(currentUserId: number, roommateName: string) {
    this.recommmendationService.sendInvitation(currentUserId, roommateName)
      .subscribe((response) => {
        this.roommatename=roommateName
        this.recommmendationService.setRoomname(this.roommatename);
        // handle success
        console.log(response);
        this.recommmendationService.sendacceptInvitation(this.user$.id, roommateName).subscribe(async (response) => {

    
          console.log(response);
          this.modalRef.close();
          alert("invitation sent to "+roommateName)
          
          
          
           
        }, (error) => {
          // handle error
          console.log(error);
        });
      }, (error) => {
        // handle error
        console.log(error);
      });
      
  }



  ngOnInit(): void {
    const user = localStorage.getItem("currentUser")
    if (user) {
      this.user$ = JSON.parse(user);  
       this.currentUserId = this.user$.id;
     
        
      }
    }
  


}
