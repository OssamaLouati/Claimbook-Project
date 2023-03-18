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
    name: 'firt year student',
   image: '../../../assets/images/Image2.png' , 
   text:"I had the pleasure of using this web application for managing my student claims and finding a roommate, and it was a game-changer. As a new student on campus, I was struggling to find someone to live with, but this app made it easy to connect with potential roommates who shared my interests and lifestyle. Additionally, the claim management feature was a lifesaver. Whenever I had an issue with my dorm room, I could easily submit a claim and receive a detailed solution to my problem. I highly recommend this app to any student who wants to simplify their college experience." 
  },    
  { 
    name: 'boarding committee ',
   image: '../../../assets/images/Image.png', 
   text:"I've been using this web application , and it's been a tremendous help in managing my student claims. The app is user-friendly and intuitive, making it easy to submit claims and track their progress. The roommate recommendation feature is also excellent."
   },   
   { 
    name: 'Technician', 
   image: "../../../assets/images/Image3.png", 
   text:"As a technician, I've found this web application to be an invaluable resource. Whenever I encounter a problem I'm not familiar with, I can easily search for a solution on the app and receive detailed instructions on how to fix it. This saves me time and ensures that I'm providing the best service to the students. Additionally, the claim management feature makes it easy for me to keep track of the issues I've resolved and the ones that still need attention. Overall, I highly recommend this app to any technician who wants to provide top-notch service to their clients."
   }];

}
