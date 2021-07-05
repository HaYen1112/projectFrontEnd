
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

  index = 0;
  private data: any[];
  private datas: any[];
  private url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Frss%2Ftai-chinh-kinh-doanh.rss';

    constructor(private component: AppComponent) {
      this.data=[];
      this.dataDate = [];
      this.dataImg = [];
      this.dataTitle = [];
      this.datas=[];
      component.getData(this.url)
      .subscribe(value => {
        for (const [k, v] of Object.entries(value)) {
          this.index++;
          if (this.index == 3){
            this.data.push(v);
            for (const [s, x] of Object.entries(this.data[0]))
                  this.datas.push(x);
              for (const [s, x] of Object.entries(this.datas)){
                    this.dataTitle.push(x['title']);
                    this.dataDate.push(x['pubDate']);
                    this.dataImg.push(x['thumbnail']);
              }
            }
           }
      });
     }
  ngOnInit(): void {
  }

}
