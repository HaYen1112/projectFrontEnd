import { Component, Injectable, Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable({providedIn: 'root'})
export class AppComponent {
  constructor(private http: HttpClient){
         }
  getData(url: string): Observable<any>{
    return this.http.get(url);
  }

  }
