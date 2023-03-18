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
  constructor(public modalRef: MdbModalRef<RecommendationComponent> ,private recommmendationService: RecommendationService ) {
    this.recommended_r=recommmendationService.recommended_roommates;
  }
  


}
