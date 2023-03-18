import { Component ,ViewContainerRef, ComponentFactoryResolver, ComponentRef} from '@angular/core';
import { Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginuserService } from 'src/app/service/loginuser.service';
import {SigninComponent} from '../signin/signin.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faHome = faHome;
  faBullhorn=faBullhorn;
  isMenuCollapsed = true;
  showSignINCard = false;
  showSignInCardToggle(){
  this.showSignINCard== !this.showSignINCard;
  }

  constructor(private loginuserservice: LoginuserService, private router: Router) {}

  logout() {
    this.loginuserservice.logout().subscribe(() => {
      // Redirect the user to the login page or home page
      this.loginuserservice.clearUser();
      localStorage.removeItem('currentUser');
      this.router.navigate(["/login"]);
    });
  }
  
}
