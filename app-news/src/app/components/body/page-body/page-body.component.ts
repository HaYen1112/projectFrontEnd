import { Component, Input, OnInit } from '@angular/core';
import { Data } from './data';

@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.scss']
})
export class PageBodyComponent implements OnInit {
  data: any[];
  constructor(private httpData: Data ) {
    this.data = [];
    httpData.getData('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fhome.rss')
          // .subscribe(value =>{
          //   console.log(Object.entries(value));
          // })
      .subscribe(value => {
        console.log(Object.entries(value));
        // for (const [k, v] of Object.entries(value)) {
        //    console.log(v);
        //      this.data?.push(v);
        //  }
      });
  }

  ngOnInit(): void {
  }

}
