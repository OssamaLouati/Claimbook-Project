import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  providers: [NgbCarouselConfig] 
})
export class TestimonialsComponent {
  
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  items = [    { 
    name: 'International Program Developer',
   image: '../../../assets/images/Image.png' , 
   text:"Nesciunt et facilis atque incidunt qui voluptatem non. Facere id voluptatem dolore velit a.  Laborum dolorum voluptatibus deleniti id id quo ea voluptate incidunt. Laborum reiciendis qui aut officia doloribus veniam quidem dignissimos ." 
  },    
  { 
    name: 'International Program Developer',
   image: '../../../assets/images/Image.png', 
   text:"Nesciunt et facilis atque incidunt qui voluptatem non. Facere id voluptatem dolore velit a.  Laborum dolorum voluptatibus deleniti id id quo ea voluptate incidunt. Laborum reiciendis qui aut officia doloribus veniam quidem dignissimos ."
   },   
   { 
    name: 'International Program Developer', 
   image: "../../../assets/images/Image.png", 
   text:"Nesciunt et facilis atque incidunt qui voluptatem non. Facere id voluptatem dolore velit a.  Laborum dolorum voluptatibus deleniti id id quo ea voluptate incidunt. Laborum reiciendis qui aut officia doloribus veniam quidem dignissimos ."
   }];

}
