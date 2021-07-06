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

  private urlMostRecent =' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthoi-su%2Fdan-sinh.rss'

  constructor(private underRight: UnderTheAdRightComponent) {
    this.dataMostRecent =[];
    this.underRight.setDatas(this.urlMostRecent, 0 , [], [], this.dataMostRecent);
   }
   getDataMostRecent(): any[]{
    return this.dataMostRecent;
  }

  ngOnInit(): void {
  }

}
