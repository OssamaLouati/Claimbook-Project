import { Component, Input } from '@angular/core';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  @Input()
  text!: string;
  faBullhorn=faBullhorn
  faLocationDot=faLocationDot
  faUserGroup=faUserGroup
  faThumbsUp=faThumbsUp
}
