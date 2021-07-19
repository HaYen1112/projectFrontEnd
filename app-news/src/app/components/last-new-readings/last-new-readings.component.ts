import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-last-new-readings',
  templateUrl: './last-new-readings.component.html',
  styleUrls: ['./last-new-readings.component.scss']
})
export class LastNewReadingsComponent implements OnInit {
   data: any[] = [];

  constructor(private route: Router) {
     const navigation = this.route.getCurrentNavigation();
     this.data = navigation?.extras.state as any[];
  }

  ngOnInit(): void {
  }

}
