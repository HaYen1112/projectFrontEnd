import { Component,Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UnderTheAdRightComponent } from '../under-the-ad-right.component';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() dataMostRecent : any[];
  @Input() dataQP : any[];
  @Input() dataCN : any[];

  // thời sự
  private urlMostRecent =' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fdan-sinh.rss'
  //Quốc phòng
  private urlOP ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fquoc-phong.rss';
 //Công nghệ
  private urlCN =' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe%2Fchuyen-doi-so.rss';
  constructor(private underRight: UnderTheAdRightComponent) {
    this.dataMostRecent =[];
    this.dataQP = [];
    this.dataCN = [];
    this.underRight.setDatas(this.urlMostRecent, 0 , [], [], this.dataMostRecent);
    this.underRight.setDatas(this.urlOP, 0,[],[], this.dataQP);
    this.underRight.setDatas(this.urlCN, 0,[],[], this.dataCN);
   }
   getDataMostRecent(): any[]{
    return this.dataMostRecent;
  }
  getDataQP(): any[]{
    return this.dataQP;
  }
  getDataCN(): any[]{
    return this.dataCN;
  }

  ngOnInit(): void {
  }

}
