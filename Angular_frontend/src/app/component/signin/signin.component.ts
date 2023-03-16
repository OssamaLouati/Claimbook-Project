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
        this.user.id = res.id;
        this.user.bio=res.bio;
        this.user.email=res.email;
        this.user.filiere=res.filiere;
        this.user.name=res.name;
        this.user.niveau=res.niveau;
        this.user.pavillon=res.pavillon;
        this.user.room=res.room;
        this.user.roommate=res.roommate;
        this.user.skills=res.skills;

        console.log(this.user);
        // this.loginuserservice.setUser(this.user);
        alert("valid email/password")
      
        
        const userJson = JSON.stringify(this.user);
        localStorage.setItem('currentUser', userJson);

        const userr = localStorage.getItem("currentUser"); // retrieve JSON string from localStorage
        const user = userr ? JSON.parse(userr) : {}
        
        this.loginuserservice.setUser(user);
        console.log(user.id);
        this.router.navigate(["/profile"]);
      
      }else{
        alert("invalid email/password");
      }
    }
    )
  }
}
