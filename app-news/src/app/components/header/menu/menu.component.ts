import { ActivatedRoute, Navigation, NavigationExtras, provideRoutes } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { ProviderAstType } from '@angular/compiler';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']

})

export class MenuComponent implements OnInit {

  constructor() {
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
   colorTextBCB = '';
   colorBackgroundBCB = '';
   colorTextDN = '';
   colorBackgroundDN = '';
   colorTextLH = '';
   colorBackgroundLH = '';
   indDM = 0;
   indTI = 0;
   indTK = 0;
   indDCB = 0;
   indVL = 0;
   indBCB = 0;
   indLH = 0;
   indDN = 0;

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
   this.colorTextBCB = '';
   this.colorBackgroundBCB = '';
   this.colorTextDN = '';
   this.colorBackgroundDN = '';
   this.colorTextLH = '';
   this.colorBackgroundLH = '';
    if (index == 'chuyenmuc') {
        this.colorBackgroundDanhMuc = 'white';
        this.colorTextDanhMuc = 'black';
        this.indDM++;
        if (this.indDM > 1) {
          this.colorBackgroundDanhMuc = '';
          this.colorTextDanhMuc = '';
           this.indDM = 0;
        }
        this.indTK = 0;  this.indTI = 0;  this.indDCB = 0;
        this.indVL = 0;  this.indBCB = 0; this.indLH = 0;  this.indDN = 0;
    }
    if (index == 'tienich') {
      this.colorTextTienIch = 'black';
      this.colorBackgroundTienIch = 'white';
      this.indTI++;
      this.indTK = 0;  this.indDM = 0;  this.indDCB = 0;
      this.indVL = 0;  this.indBCB = 0; this.indLH = 0;  this.indDN = 0;
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
    this.indVL = 0;  this.indBCB = 0; this.indLH = 0;  this.indDN = 0;
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
  this.indVL = 0;  this.indBCB = 0; this.indLH = 0;  this.indDN = 0;
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
  this.indTK = 0;  this.indBCB = 0; this.indLH = 0;  this.indDN = 0;
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
  this.indVL = 0;  this.indBCB = 0; this.indTK = 0;  this.indDN = 0;
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
  this.indVL = 0;  this.indBCB = 0; this.indLH = 0;  this.indTK = 0;
}
if (index == 'bancanbiet') {
  this.colorTextBCB = 'black';
  this.colorBackgroundBCB = 'white';
  this.indBCB++;
  if (this.indBCB > 1) {
    this.colorTextBCB = '';
    this.colorBackgroundBCB = '';
    this.indBCB = 0;
  }
  this.indDM = 0;  this.indTI = 0;  this.indDCB = 0;
  this.indVL = 0;  this.indTK = 0; this.indLH = 0;  this.indDN = 0;
}
}
  ngOnInit(): void {

  }

}
