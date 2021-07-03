import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-body-center',
  templateUrl: './body-center.component.html',
  styleUrls: ['./body-center.component.scss']
})

export class BodyCenterComponent implements OnInit {

  data?: any[];
  navigationExtras?: NavigationExtras;

   constructor(private router: Router) {
  }

  view(product: any[]): void {
    this.navigationExtras = {state: product};
    this.router.navigateByUrl('/product-detail', this.navigationExtras);
  }
  ngOnInit(): void {
  }

}
