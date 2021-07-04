import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
@Input() dataTitle: any[];
@Input() dataImg: any[];
@Input() dataDate: any[];
 url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Fthe-gioi%2Fkinh-te-the-gioi.rss';

  constructor(private component: AppComponent) {
      component.setMain(this.url);
      this.dataTitle = component.getDataTitle();
      this.dataImg = component.getDataImg();
      this.dataDate = component.getDataDate();
   }

  ngOnInit(): void {
  }

}
