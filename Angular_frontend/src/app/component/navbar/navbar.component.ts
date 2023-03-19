import { Component ,ViewContainerRef, ComponentFactoryResolver, ComponentRef} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginuserService } from 'src/app/service/loginuser.service';
import {SigninComponent} from '../signin/signin.component';
import { Subscription } from 'rxjs';

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
  isAuth = false;
  isOpen = false;

  
  constructor(private loginuserservice: LoginuserService, private router: Router) {}
  
  ngOnInit(): void{
    this.isAuthenticated();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isAuth;
      }
    });
  }

  
  
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
  
  isAuthenticated(){
    const stored_user = localStorage.getItem("currentUser"); 
    const user = stored_user ? JSON.parse(stored_user) : {}
    if(user.id > 1){
      this.isAuth = true;
    }
  }


  logout() {
    this.loginuserservice.logout().subscribe(() => {
      this.loginuserservice.clearUser();
      localStorage.removeItem('currentUser');
      this.router.navigate(["/login"]);
    });
  }
  
}
