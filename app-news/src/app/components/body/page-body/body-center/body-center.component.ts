import { formatDate } from '@angular/common';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-body-center',
  templateUrl: './body-center.component.html',
  styleUrls: ['./body-center.component.scss']
})
export class BodyCenterComponent implements OnInit {
  today= new Date();
  jstoday = formatDate(this.today, 'yyyy-MM-dd hh:mm:ss a', 'en-VN', '+0700');

  constructor(private com: AppComponent) { }
  setDatas(url: string, index: any, data: any[], datas: any[], dataItem: any[]){
    const days = Number(this.jstoday.substr(8, 2));
    const hours = Number(this.jstoday.substr(11, 2));
    const minutes = Number(this.jstoday.substr(14, 2));
    const months = Number(this.jstoday.substr(5, 2));
    //console.log(month);
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
                     dataItem.push(x['thumbnail']);
                     dataItem.push(x['title']);
                    const day = days - Number(x['pubDate'].substr(8, 2));
                    const minute = minutes - Number(x['pubDate'].substr(14, 2));
                    const hour = hours - Number(x['pubDate'].substr(11, 2));
                    const month = months - Number(x['pubDate'].substr(5, 2));
                   // console.log(month);
                    if (month > 0){
                      dataItem.push(month+' tháng trước');
                    }else
                    if (day > 0) {
                      dataItem.push(day+' ngày trước');
                    }else{
                      if (hour > 0){
                        dataItem.push(hour+' giờ trước');
                      }else{
                        dataItem.push(minute+ ' phút trước');
                      }
                    }

            }
          }
         }
    });
  }
  setLink(url: string, index: any, data: any[], datas: any[], dataItem: any[]){
    this.com.getData(url)
    .subscribe(value => {
      for (const [k, v] of Object.entries(value)) {
        index++;
        if (index == 3){
          data.push(v);
          for (const [s, x] of Object.entries(data[0]))
                datas.push(x);
            for (const [s, x] of Object.entries(datas)){
                     dataItem.push(x['link']);

            }
          }
         }
    });
  }
  ngOnInit(): void {
  }

}
