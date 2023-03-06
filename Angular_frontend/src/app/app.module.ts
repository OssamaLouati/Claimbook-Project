import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import {Routes, RouterModule} from '@angular/router'
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './component/header/header.component';
import { ServiceComponent } from './component/service/service.component';
import { TestimonialsComponent } from './component/testimonials/testimonials.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './page/home/home.component';
import { AddClaimComponent } from './page/add-claim/add-claim.component';
import { ClaimListComponent } from './page/claim-list/claim-list.component';
import { NgbdSortableHeader } from './directive/sortable.directive';
import {DecimalPipe} from '@angular/common';
import { ProfileComponent } from './page/profile/profile.component';
import { SigninComponent } from './component/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClaimComponent } from './page/claim/claim.component';
import {MatIconModule} from '@angular/material/icon';
import { EditprofileComponent } from './page/editprofile/editprofile.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addclaim', component: AddClaimComponent },
  { path: 'claims', component: ClaimListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: SigninComponent },
  { path: 'claim', component: ClaimComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ServiceComponent,
    TestimonialsComponent,
    FooterComponent,
    HomeComponent,
    AddClaimComponent,
    
    SigninComponent,
    ClaimComponent,
    EditprofileComponent,
    ProfileComponent

    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgImageSliderModule,
    NgbModule,
    NgbdSortableHeader,
    HttpClientModule,
    ClaimListComponent,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule,
    MdbModalModule,
    FormsModule,
    
  ],
  exports: [RouterModule],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
