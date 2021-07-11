import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { BodyCenterComponent } from '../../../body-center.component';
@Component({
  selector: 'app-words-ad-left',
  templateUrl: './words-ad-left.component.html',
  styleUrls: ['./words-ad-left.component.scss']
})
export class WordsAdLeftComponent implements OnInit {

  @Input() dataItem: any[];
  private urlLife = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fhome.rss'.trim();
    constructor(private underLeft: BodyCenterComponent) {
      this.dataItem = [];
      this.underLeft.setDatas(this.urlLife, 0 , [], [], this.dataItem);

     }
  ngOnInit(): void {
  }

}
