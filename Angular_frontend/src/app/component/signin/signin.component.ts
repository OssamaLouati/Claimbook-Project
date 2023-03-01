import { Component, OnInit } from '@angular/core';
import { LoginuserService } from 'src/app/service/loginuser.service';
import { User } from 'src/app/user';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user:User = new User();
  
  constructor(private loginuserservice: LoginuserService){

  }
  ngOnInit(): void {
      
  }
  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(data =>{
      alert('Login success !!')
    }, error=>alert("Incorrect email and password"))
  }
  





}
