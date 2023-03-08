import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserService } from 'src/app/service/loginuser.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:User = new User();
  
  
  constructor(private loginuserservice: LoginuserService, private router: Router){
    

  }
  ngOnInit(): void {
      
  }
  userLogin(){

    this.loginuserservice.loginUser(this.user.email,this.user.password).subscribe((res)=>{
      if(res!=null){
       
       this.user.bio=res.bio;
       this.user.email=res.email;
       this.user.filiere=res.filiere;
       this.user.name=res.name;
       this.user.niveau=res.niveau;
       this.user.pavillon=res.pavillon;
       console.log(res.pavilliom)
       this.user.room=res.room;
       this.user.roommate=res.roommate;
       this.user.skills=res.skills;
       console.log(this.user);
       this.loginuserservice.setUser(this.user);
      alert("valid email/password")
      this.router.navigate(["/profile"]);
     }
     else{
      alert("invalid email/password");
     }
    })
  }
  





}
