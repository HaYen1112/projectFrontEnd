import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component,Input, OnInit } from '@angular/core';
import { BodyCenterComponent } from '../body-center.component';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  animations: [
    trigger('animationPhoto', [
      transition('* => *', [
        query('div', style({transform: 'translateX(-1500px)'})),
        query('div', stagger(1000, [animate('3.5s', style({transition: 'translateX(-1250px)'}))])),
        query('div', style({transform: 'translateX(-1250px)'})),
        query('div', stagger(1000, [animate('3.5s', style({transition: 'translateX(-1000px)'}))])),
        query('div', style({transform: 'translateX(-1000px)'})),
        query('div', stagger(1000, [animate('3.5s', style({transition: 'translateX(-750px)'}))])),
        query('div', style({transform: 'translateX(-750px)'})),
        query('div', stagger(1000, [animate('3.5s', style({transition: 'translateX(-500px)'}))])),
        query('div', style({transform: 'translateX(-500px)'})),
        query('div', stagger(1000, [animate('3.5s', style({transition: 'translateX(-250px)'}))])),
        query('div', style({transform: 'translateX(-250px)'})),
        query('div', stagger(1000, [animate('3.5s', style({transition: 'translateX(0px)'}))]))
      ])
    ])]
})
export class NewsComponent implements OnInit {
  @Input() images = [1,2,3,4,5,6,7,8,9,10];
  @Input() dataKDMN: any[];
  @Input() dataLD: any[];
  @Input() dataKP: any[];
  @Input() dataSVK: any[];
  @Input() dataVideo: any[];
  @Input() dataLink: any[];
  show = true;

  private urlKDMN='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fsuc-khoe%2Fkhoe-dep-moi-ngay.rss';
  private urlLD =' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fsuc-khoe%2Flam-dep.rss';
  private urlKP ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdu-lich%2Fkham-pha.rss';
  private urlSVK ='https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fsuc-khoe%2Fsong-vui-khoe.rss';
  private urlVideo =' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fthoi-su.rss'
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
    this.newBodyCenter.getDatas(this.urlVideo, this.dataVideo);

  }
  ngOnInit() {
    setInterval(()=> {
      this.show = !this.show;
      setTimeout(()=> {
        this.show = !this.show;
      }, 0);
    }, 30000);
  }
}
