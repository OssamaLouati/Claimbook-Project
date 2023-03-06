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
     if(res==1){
      alert("valid email/password")
      this.router.navigate(["/profile"]);
     }
     else{
      alert("invalid email/password");
     }
    })
  }
  





}
