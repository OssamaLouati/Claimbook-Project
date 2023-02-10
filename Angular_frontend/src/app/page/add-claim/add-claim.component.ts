import { Component , OnInit , Input , Output } from '@angular/core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { CLAIMS } from 'src/app/claims';
import { Claim } from 'src/app/claim';
import { ClaimService } from 'src/app/service/claim-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent {
  faCamera=faCamera
  claims$: Observable<Claim[]>;
  constructor(public claimService : ClaimService){
    this.claims$ = claimService.countries$;

  }

}
