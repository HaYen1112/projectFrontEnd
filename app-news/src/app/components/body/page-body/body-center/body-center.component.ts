import { formatDate } from '@angular/common';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-body-center',
  templateUrl: './body-center.component.html',
  styleUrls: ['./body-center.component.scss']
})
@Injectable()
export class BodyCenterComponent implements OnInit {
  @Input() descipt: any[] = [];
  today = new Date();
  jstoday = formatDate(this.today, 'yyyy-MM-dd hh:mm:ss aa', 'en-US', '+0700');
  stringJson: any;
  constructor(private com: AppComponent) {

  }


  setDatas(url: string, index: any, data: any[], datas: any[], dataItem: any[]) {
    const days = Number(this.jstoday.substr(8, 2));
    const hours = Number(this.jstoday.substr(11, 2));
    const minutes = Number(this.jstoday.substr(14, 2));
    const months = Number(this.jstoday.substr(5, 2));
    //console.log(month);
    this.com.getData(url)
      .subscribe((value: any) => {
        for (const [k, v] of Object.entries(value)) {
          index++;
          if (index == 3) {
            data.push(v);
            for (const [s, x] of Object.entries(data[0]))
              datas.push(x);
            for (const [s, x] of Object.entries(datas)) {
              dataItem.push(x['thumbnail']);
              dataItem.push(x['title']);
              this.descipt.push((JSON.parse(JSON.stringify(x['description']))));
            // console.log(JSON.parse(data[0]));
              const day = days - Number(x['pubDate'].substr(8, 2));
              const minute = minutes - Number(x['pubDate'].substr(14, 2));
              const hour = hours - Number(x['pubDate'].substr(11, 2));
              const month = months - Number(x['pubDate'].substr(5, 2));
              if (month > 0) {
                dataItem.push(month + ' tháng trước');
              } else
                if (day > 0) {
                  dataItem.push(day + ' ngày trước');
                } else {
                  if (hour > 0) {
                    dataItem.push(hour + ' giờ trước');
                  } else {
                    if (minute > 0) { dataItem.push(minute + ' phút trước') }
                    else { dataItem.push(hour + 5 + ' giờ trước'); }
                  }
                }

            }
          }
        }
      });
  }
  @Input() htmls: any[] = [];
  setLink(url: string, index: any, data: any[], datas: any[], dataItem: any[]) {
    this.com.getData(url)
      .subscribe((value: any) => {
        for (const [k, v] of Object.entries(value)) {
          index++;
          if (index == 3) {
            data.push(v);
            for (const [s, x] of Object.entries(data[0]))
              datas.push(x);
            for (const [s, x] of Object.entries(datas)) {
              dataItem.push(x['link']);
            }
          }
        }
      });
  }
  ngOnInit(): void {
  }

}
