import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataTitle: any[];
  dataDate: any[];
  dataImg: any[];
  index = 0;
  url: string;

  constructor(private http: HttpClient){
    this.dataTitle = [];
    this.dataDate = [];
    this.dataImg = [];
    this.url = '';
  }
  setMain(url: string){
    this.url=url;
    this.http.get(this.url).toPromise().then(data=>{
      console.log(Object.entries(data));
      for (const [k, v] of Object.entries(data)) {
              this.index++;
              if (this.index == 3)
              for(let i of v)
                   for (const [s, x] of Object.entries(i)){
                    if(s =='title')
                        this.dataTitle.push(x);
                     if(s =='pubDate')
                        this.dataDate.push(x);
                    if(s =='thumbnail')
                        this.dataImg.push(x);
                   }
           }
      });
      for(let a of this.dataImg)
        console.log(a);
  }
  getDataTitle(){
    return this.dataTitle;
  }
  getDataDate(){
    return this.dataDate;
  }
  getDataImg(){
    return this.dataImg;
  }
}
