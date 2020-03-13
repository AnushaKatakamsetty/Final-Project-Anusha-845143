import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {

  constructor(private router:Router) {
    if(localStorage.getItem('Buyer'))
    {

    }
    else{
      this.router.navigateByUrl('/home/login')
    }
   }

  ngOnInit() {  }
login()
{
  localStorage.clear();
 this.router.navigateByUrl('/login');
}
}
