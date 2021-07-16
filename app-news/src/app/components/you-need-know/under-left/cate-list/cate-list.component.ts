import { Component, Input, OnInit } from '@angular/core';
import { BodyCenterComponent } from 'src/app/components/body/page-body/body-center/body-center.component';
@Component({
  selector: 'app-cate-list',
  templateUrl: './cate-list.component.html',
  styleUrls: ['./cate-list.component.scss']
})
export class CateListComponent implements OnInit {
 private urlTD ="https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fban-can-biet%2Ftuyen-dung.rss";
 private urlSP=" https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fban-can-biet%2Fsan-pham.rss";
 private urlGT=" https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fban-can-biet%2Fgiai-tri.rss";
 private urlDV="  https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fban-can-biet%2Fdich-vu.rss";
 private urlGTh=" https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fban-can-biet%2Fgiai-thuong.rss";
 private urlTB=" https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fban-can-biet%2Fthong-bao.rss"; 
 @Input() dataTD: any[];
 @Input() dataSP: any[];
 @Input() dataGT: any[];
 @Input() dataDV: any[];
 @Input() dataGTh: any[];
 @Input() dataTB: any[];
 @Input() dataCM: any[]=[{title: ['TUYỂN DỤNG','SẢN PHẨM','GIẢI TRÍ','DỊCH VỤ','GIẢI THƯỞNG','THÔNG BÁO']}];
 constructor(private cate : BodyCenterComponent) {
   this.dataTD = [];
   this.dataSP = [];
   this.dataGT = [];
   this.dataDV = [];
   this.dataGTh = [];
   this.dataTB = [];

   this.cate.getDatas(this.urlTD,this.dataTD);
   this.cate.getDatas(this.urlSP,this.dataSP);
   this.cate.getDatas(this.urlGT,this.dataGT);
   this.cate.getDatas(this.urlDV,this.dataDV);
   this.cate.getDatas(this.urlGTh,this.dataGTh);
   this.cate.getDatas(this.urlTB,this.dataTB);
  }

  ngOnInit(): void {
  }

}
