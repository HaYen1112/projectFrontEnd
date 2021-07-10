import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BodyCenterComponent } from '../../../body-center.component';
import { UnderTheAdLeftComponent } from '../under-the-ad-left.component';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],

})
export class FeatureComponent implements OnInit {

  @Input() dataLife: any[];
  @Input() dataTravel: any[];
  @Input() dataFashion: any[];
  @Input() dataSport: any[];
  @Input() dataTechnology: any[];

  private urlLife = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdoi-song.rss'.trim();
  private urlTravel = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fdu-lich.rss'.trim();
  private urlFashion = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fttt.rss'.trim();
  private urlSport = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthethao.thanhnien.vn%2Frss%2Fhome.rss'.trim();
  private urlTechnology = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fcong-nghe.rss'.trim();
    constructor(private underLeft: BodyCenterComponent) {
      this.dataLife = [];
      this.dataFashion = [];
      this.dataSport = [];
      this.dataTechnology = [];
      this.dataTravel = [];

      this.underLeft.setDatas(this.urlLife, 0 , [], [], this.dataLife);
      this.underLeft.setDatas(this.urlTravel, 0 , [], [], this.dataTravel);
      this.underLeft.setDatas(this.urlFashion, 0 , [], [], this.dataFashion);
      this.underLeft.setDatas(this.urlSport, 0, [], [], this.dataSport);
      this.underLeft.setDatas(this.urlTechnology, 0 , [], [], this.dataTechnology);
    //  console.log(this.dataItem);
     }
     getDataLife(): any[]{
       return this.dataLife;
     }
     getDataTechnology(): any[]{
       return this.dataTechnology;
     }
  ngOnInit(): void {
  }

}
