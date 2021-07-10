
import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BodyCenterComponent } from '../body/page-body/body-center/body-center.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() data: any[];
  private url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh.rss'.trim();
    constructor(private bodyCenter: BodyCenterComponent) {
      this.data=[];
      this.bodyCenter.setDatas(this.url, 0, [], [], this.data);
     }
  ngOnInit(): void {
  }

}


