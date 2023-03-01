import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import { EditprofileComponent } from '../editprofile/editprofile.component';
@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.component.html',
  imports: [
    MatDialogModule
  ],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(EditprofileComponent, {
      width: '30%'

    })

    
  }
}



