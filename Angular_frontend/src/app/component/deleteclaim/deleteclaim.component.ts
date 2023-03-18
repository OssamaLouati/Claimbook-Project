import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-deleteclaim',
  templateUrl: './deleteclaim.component.html',
  styleUrls: ['./deleteclaim.component.css']
})
export class DeleteclaimComponent {

  constructor(public modalRef: MdbModalRef<DeleteclaimComponent>, private activatedRoute: ActivatedRoute){}

  onSubmit(): void{
    
  }

}
