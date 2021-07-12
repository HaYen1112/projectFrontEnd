import { Component,Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BodyCenterComponent } from '../body-center.component';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() dataKDMN: any[];
  @Input() dataLD: any[];
  @Input() dataKP: any[];
  @Input() dataSVK: any[];
  @Input() dataVideo: any[];
  @Input() dataLink: any[];

  private urlKDMN='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fsuc-khoe%2Fkhoe-dep-moi-ngay.rss';
  private urlLD =' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fsuc-khoe%2Flam-dep.rss';
  private urlKP ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdu-lich%2Fkham-pha.rss';
  private urlSVK ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fsuc-khoe%2Fsong-vui-khoe.rss';
  private urlVideo ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fvideo.thanhnien.vn%2Frss%2Fhome.rss'
  constructor(private newBodyCenter: BodyCenterComponent) {
    //Khỏe đẹp mỗi ngày
    this.dataKDMN =[];
    //Làm đẹp
    this.dataLD = [];
    //Khám phá
    this.dataKP= [];
    //Sống vui khỏe
    this.dataSVK= [];
    //video
    this.dataVideo =[];
    //link
    this.dataLink = [];
    this.newBodyCenter.setDatas(this.urlKDMN, this.dataKDMN);
    this.newBodyCenter.setDatas(this.urlLD, this.dataLD);
    this.newBodyCenter.setDatas(this.urlKP, this.dataKP);
    this.newBodyCenter.setDatas(this.urlSVK, this.dataSVK);
    this.newBodyCenter.setDatas(this.urlVideo, this.dataVideo);
    this.newBodyCenter.setLink(this.urlVideo, this.dataLink);
  }
  ngOnInit(): void {
  }

}
