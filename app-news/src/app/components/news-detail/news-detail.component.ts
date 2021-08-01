import { Component, OnInit, Injectable,Input} from '@angular/core';
import { BodyCenterComponent } from 'src/app/components/body/page-body/body-center/body-center.component';
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {
  urlTB = " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fban-can-biet%2Fthong-bao.rss&api_key=hjpb9yjc64ebiz3g8uodqlqthop2adx5mkhfwtvq".trim();
  @Input() dataTB: any[];
  constructor(private detail : BodyCenterComponent) {
    this.dataTB = [];
    this.detail.setLink(this.urlTB,this.dataTB);
   }

  ngOnInit(): void {
  }

}
