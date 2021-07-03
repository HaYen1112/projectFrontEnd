import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lastnew-body-reading',
  templateUrl: './lastnew-body-reading.component.html',
  styleUrls: ['./lastnew-body-reading.component.scss']
})
export class LastnewBodyReadingComponent implements OnInit {

  product: any[];
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.product = navigation?.extras.state as  any[];

    console.log(this.product);
  }

  ngOnInit(): void {
  }

}
