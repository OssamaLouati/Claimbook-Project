import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginuserService } from 'src/app/service/loginuser.service';
import { User } from 'src/app/user';
import { Technician } from 'src/app/technician';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  isTechnicalExpert = false;
  technician: Technician = new Technician();
  user:User = new User();

  constructor(private loginuserservice: LoginuserService, private router: Router){
  
  }

  ngOnInit(): void {    
  }

  togglePassword(button: HTMLButtonElement): void {
    button.classList.toggle("showing");
    const input = document.getElementById("password") as HTMLInputElement;
    input.type = input.type === "password" ? "text" : "password";
  }

  toggleLoginType() {
    this.isTechnicalExpert = !this.isTechnicalExpert;
  }
  
  userLogin(){

    if (this.isTechnicalExpert) {
      
      this.loginuserservice.loginTechnician(this.user.email,this.user.password).subscribe((res)=>{
        if(res!=null){
          this.technician.id = res.id;
          this.technician.email=res.email;
          this.technician.name=res.name;
  
          console.log(this.technician);
          
          
          const TechnicianJson = JSON.stringify(this.technician);
          localStorage.setItem('currentUser', TechnicianJson);
          
          const tech = localStorage.getItem("currentUser"); 
          const user = tech ? JSON.parse(tech) : {}
          
          this.loginuserservice.setTechnician(this.technician);
          console.log(this.technician.id);
          this.router.navigate(["/claims_tech"]);
          alert("Technician Successfully logged in as " + this.technician.name);
        
        }else{
          alert("invalid email/password");
        }
      }
      )
      
    } else {

      this.loginuserservice.loginStudent(this.user.email,this.user.password).subscribe((res)=>{
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
          this.user.gender=res.gender;
          this.user.avatar=res.avatar;
          console.log(this.user);
          alert("Successfully logged in as " + this.user.name);
          const userJson = JSON.stringify(this.user);
          localStorage.setItem('currentUser', userJson);
          const userr = localStorage.getItem("currentUser");
          const user = userr ? JSON.parse(userr) : {}
          this.loginuserservice.setUser(user);
          console.log(user.id);
          this.router.navigate(["/profil"]);
        
        }else{
          alert("invalid email/password");
        }
      }
      )
    }
  }
}
