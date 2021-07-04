import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-words-ad-left',
  templateUrl: './words-ad-left.component.html',
  styleUrls: ['./words-ad-left.component.scss']
})
export class WordsAdLeftComponent implements OnInit {
  @Input() dataTitle: any[];
  @Input() dataImg: any[];
  @Input() dataDate: any[];
   private url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fthanhnien.vn%2Fvideo%2Fthoi-su.rss';
  
    constructor(private component: AppComponent) {
        component.setMain(this.url);
        this.dataTitle = component.getDataTitle();
        this.dataImg = component.getDataImg();
        this.dataDate = component.getDataDate();
     }
  ngOnInit(): void {
  }

}
