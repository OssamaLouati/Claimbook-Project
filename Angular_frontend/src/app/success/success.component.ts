import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {
  
  constructor(private router: Router, public modalRef: MdbModalRef<SuccessComponent>) { }
  goToPage() {
    this.router.navigate(['/claims']);
    this.modalRef.close();
  }
  
}
