import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UnderTheAdLeftComponent } from '../under-the-ad-left.component';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],

})
export class FeatureComponent implements OnInit {

  @Input() dataItem: any[];
  private urlLife = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdoi-song.rss'.trim();
  private urlTravel = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdu-lich.rss'.trim();
  private urlFashion = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fttt.rss'.trim();
  private urlSport = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthethao.thanhnien.vn%2Frss%2Fhome.rss'.trim();
  private urlTechnology = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe.rss'.trim();
    constructor(private underLeft: UnderTheAdLeftComponent) {
      this.dataItem = [];
      this.underLeft.setDatas(this.urlLife, 0 , [], [], this.dataItem);
      this.underLeft.setDatas(this.urlTravel, 0 , [], [], this.dataItem);
      this.underLeft.setDatas(this.urlFashion, 0 , [], [], this.dataItem);
      this.underLeft.setDatas(this.urlSport, 0, [], [], this.dataItem);
      this.underLeft.setDatas(this.urlTechnology, 0 , [], [], this.dataItem);
    //  console.log(this.dataItem);
     }
  ngOnInit(): void {
  }

}
