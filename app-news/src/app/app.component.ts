import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-news';
  url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftuoitre.vn%2Frss%2Ftin-moi-nhat.rss';
  data: any[];
  index = 0;
  s = '';
  constructor(private http:HttpClient){
    this.data = [];
      this.http.get(this.url).toPromise().then(data=>{
        //console.log(data);
        console.log(Object.entries(data));
        for (const [k, v] of Object.entries(data)) {
          this.index++;
           if (this.index == 3)
              for(let i of v)
                 {
                  for (let h in i)
                     if (h = 'title')
                         this.data.push(i[h]);
                        console.log(data.toString);
                 }
        }
                console.log(this.data.toString());
        // for(let items in data)
        //   if (data.hasOwnProperty(items))
        //      for(let i of items){
        //      this.array?.push(i);
        //       console.log(items);
        //     }

      });
  }
}
