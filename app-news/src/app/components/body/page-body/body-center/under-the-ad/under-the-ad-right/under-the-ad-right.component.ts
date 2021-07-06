import { Component, Injectable, Input, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-under-the-ad-right',
  templateUrl: './under-the-ad-right.component.html',
  styleUrls: ['./under-the-ad-right.component.scss']
})
export class UnderTheAdRightComponent implements OnInit {

  constructor(private com: AppComponent) {
   }
   setDatas(url: string, index: any, data: any[], datas: any[], dataItem: any[]){
    this.com.getData(url)
    .subscribe(value => {
      for (const [k, v] of Object.entries(value)) {
        index++;
        if (index == 3){
          data.push(v);
          for (const [s, x] of Object.entries(data[0]))
                datas.push(x);
                console.log(data);
            for (const [s, x] of Object.entries(datas)){
               // if ((s == 'title') || (s == 'thumbnail') || (s == 'pubDate'))
                     dataItem.push(x['thumbnail']);
                     dataItem.push(x['title']);
                     dataItem.push(x['pubDate']);
            }
          }
         }
    });
  }

  ngOnInit(): void {
  }

}
