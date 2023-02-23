import { Component ,ViewContainerRef, ComponentFactoryResolver, ComponentRef} from '@angular/core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import {SigninComponent} from '../signin/signin.component'

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
  
}
