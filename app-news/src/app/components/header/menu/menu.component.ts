
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']

})
export class MenuComponent implements OnInit {
 @Input() dataNew: any[];
 displayBCB = '';
 displayHome = '';
 paddingHome = 0;
 paddingBCB = 0;
 titleHome = '';
 titleBCB = '';
 fontw ='';
 routerHome: string = '/';
 routerBCB: string = 'bancanbiet';
  constructor(private router: Router) {
    this.dataNew = [];
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
