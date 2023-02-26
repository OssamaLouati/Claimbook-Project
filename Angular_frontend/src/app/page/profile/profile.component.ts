import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
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
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class ProfileComponent {
  constructor(public dialog: MatDialog , private cdr: ChangeDetectorRef) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EditprofileComponent, {
    });
    this.cdr.detectChanges();

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}






