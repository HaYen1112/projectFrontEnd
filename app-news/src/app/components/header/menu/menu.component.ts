
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { AppComponent } from 'src/app/app.component';
import { BodyCenterComponent } from '../../body/page-body/body-center/body-center.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']

})
export class MenuComponent implements OnInit {

 @Input() dataTitle: any[];
 @Input() dataTime: any[];
 @Input() descipt: any[] = [];
 today = new Date();
 jstoday = formatDate(this.today, 'yyyy-MM-dd hh:mm:ss aa', 'en-US', '+0700');
 stringJson: any;
 private urlNew = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fhome.rss';
  constructor(private menu : AppComponent, private router: Router) {
    this.dataTitle = [];
    this.dataTime = [];
    this.setTitle(this.urlNew,0,[],[],this.dataTitle);
    this.setTime(this.urlNew,0,[],[],this.dataTime);

     if (this.router.url == '/bancanbiet'){
      this.titleBCB = 'TIN TỨC NHANH';
      this.titleHome = 'BẠN CẦN BIẾT';
      this.paddingHome = 10;
      this.paddingBCB = 15;
      this.displayHome = 'none';
      this.displayBCB = 'none'
      this.fontw = 'bold';
      this.routerBCB = '/';
      this.routerHome = 'bancanbiet';

}
    if (this.router.url == '/'){
      this.titleHome = 'TIN TỨC NHANH';
      this.titleBCB = 'BẠN CẦN BIẾT';
      this.paddingHome = 0;
      this.paddingBCB = 10;
      this.displayHome = '';
      this.displayBCB = ''
      this.fontw = '';
      this.routerBCB = 'bancanbiet';
      this.routerHome = '/';
}
console.log(this.routerBCB);
console.log(this.routerHome);
    }

 displayBCB = '';
 displayHome = '';
 paddingHome = 0;
 paddingBCB = 0;
 titleHome = '';
 titleBCB = '';
 fontw ='';
 routerHome: string = '/';
 routerBCB: string = 'bancanbiet';

   colorTextDanhMuc = '';
   colorBackgroundDanhMuc = '';
   colorTextTienIch = '';
   colorBackgroundTienIch = '';
   colorTextTimKiem = '';
   colorBackgroundTimKiem = '';
   colorTextDCB = '';
   colorBackgroundDCB = '';
   colorTextVL = '';
   colorBackgroundVL = '';
   colorTextDN = '';
   colorBackgroundDN = '';
   colorTextLH = '';
   colorBackgroundLH = '';
   indDM = 0;
   indTI = 0;
   indTK = 0;
   indDCB = 0;
   indVL = 0;
   indLH = 0;
   indDN = 0;
@Input() style = new NewStyle();
setColor(index :any){
   this.colorTextDanhMuc = '';
   this.colorBackgroundDanhMuc = '';
   this.colorTextTienIch = '';
   this.colorBackgroundTienIch = '';
   this.colorTextTimKiem = '';
   this.colorBackgroundTimKiem = '';
   this.colorTextDCB = '';
   this.colorBackgroundDCB = '';
   this.colorTextVL = '';
   this.colorBackgroundVL = '';
   this.colorTextDN = '';
   this.colorBackgroundDN = '';
   this.colorTextLH = '';
   this.colorBackgroundLH = '';
   this.style = new NewStyle();
    if (index == 'chuyenmuc') {
        this.colorBackgroundDanhMuc = 'white';
        this.colorTextDanhMuc = 'black';
        this.style = new Style();
        this.indDM++;
        if (this.indDM > 1) {
          this.colorBackgroundDanhMuc = '';
          this.colorTextDanhMuc = '';
          this.style = new NewStyle();
           this.indDM = 0;
        }
        this.indTK = 0;  this.indTI = 0;  this.indDCB = 0;
        this.indVL = 0;  this.indLH = 0;  this.indDN = 0;
    }
    if (index == 'tienich') {
      this.colorTextTienIch = 'black';
      this.colorBackgroundTienIch = 'white';
      this.indTI++;
      this.indTK = 0;  this.indDM = 0;  this.indDCB = 0;
      this.indVL = 0;  this.indLH = 0;  this.indDN = 0;
      if (this.indTI > 1) {
        this.colorTextTienIch = '';
        this.colorBackgroundTienIch = '';
        this.indTI = 0;
      }
  }
  if (index == 'timkiem') {
    this.colorTextTimKiem = 'black';
    this.colorBackgroundTimKiem = 'white';
    this.indTK++;
    if (this.indTK > 1) {
      this.colorTextTimKiem = '';
      this.colorBackgroundTimKiem = '';
      this.indTK = 0;
    }
    this.indDM = 0;  this.indTI = 0;  this.indDCB = 0;
    this.indVL = 0;  this.indLH = 0;  this.indDN = 0;
}
if (index == 'danhchoban') {
  this.colorTextDCB = 'black';
  this.colorBackgroundDCB = 'white';
  this.indDCB++;
  if (this.indDCB > 1) {
    this.colorTextDCB = '';
    this.colorBackgroundDCB = '';
    this.indDCB = 0;
  }
  this.indDM = 0;  this.indTI = 0;  this.indTK = 0;
  this.indVL = 0;  this.indLH = 0;  this.indDN = 0;
}
if (index == 'vieclam') {
  this.colorTextVL = 'black';
  this.colorBackgroundVL = 'white';
  this.indVL++;
  if (this.indVL > 1) {
    this.colorTextVL = '';
    this.colorBackgroundVL = '';
    this.indVL = 0;
  }
  this.indDM = 0;  this.indTI = 0;  this.indDCB = 0;
  this.indTK = 0;  this.indLH = 0;  this.indDN = 0;
}
if (index == 'lienhe') {
  this.colorTextLH = 'black';
  this.colorBackgroundLH = 'white';
  this.indLH++;
  if (this.indLH > 1) {
    this.colorTextLH = '';
    this.colorBackgroundLH = '';
    this.indLH = 0;
  }
  this.indDM = 0;  this.indTI = 0;  this.indDCB = 0;
  this.indVL = 0;  this.indTK = 0;  this.indDN = 0;
}
if (index == 'dangnhap') {
  this.colorTextDN = 'black';
  this.colorBackgroundDN = 'white';
  this.indDN++;
  if (this.indDN > 1) {
    this.colorTextDN = '';
    this.colorBackgroundDN = '';
    this.indDN = 0;
  }
  this.indDM = 0;  this.indTI = 0;  this.indDCB = 0;
  this.indVL = 0;  this.indLH = 0;  this.indTK = 0;
}

}
setTitle(urls: string, index: any, data: any[], datas: any[], dataItem: any[]){
  this.menu.getData(urls)
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

                   dataItem.push(x['title']);

          }
        }
       }
  });
}

setTime(urls: string, index: any, data: any[], datas: any[], dataItem: any[]) {

  const hours = Number(this.jstoday.substr(11, 2));
  const minutes = Number(this.jstoday.substr(14, 2));

  //console.log(month);
  this.menu.getData(urls)
    .subscribe((value: any) => {
      for (const [k, v] of Object.entries(value)) {
        index++;
        if (index == 3) {
          data.push(v);
          for (const [s, x] of Object.entries(data[0]))
            datas.push(x);
          for (const [s, x] of Object.entries(datas)) {

            this.descipt.push((JSON.parse(JSON.stringify(x['description']))));
          // console.log(JSON.parse(data[0]));

            const minute =  Number(x['pubDate'].substr(14, 2));
            const hour =  Number(x['pubDate'].substr(11, 2));
               if(minute <10 && minute >0)
                  dataItem.push(hour +':0'+ minute);
                else{
                  dataItem.push(hour +':'+ minute);
                }
                }

        }
      }
    });
}

getDataTitle(): any[]{
  return this.dataTitle;
}
getDataTime(): any[]{
  return this.dataTime;
}
  ngOnInit(): void {

  }
}
Injectable();
class Style {
    'position': string = 'absolute';
    'top.px': number = -5;
    'left.px': number = 0;
    'color': string = 'blue';
    'display': string = 'block';
}
class NewStyle {
  'display': string = 'none';
}

