import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import {Routes, RouterModule} from '@angular/router'

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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addclaim', component: AddClaimComponent },
  
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
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgImageSliderModule,
    NgbModule,
    RouterModule.forRoot(routes)
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
