import { Component, Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable({providedIn: 'root'})
export class AppComponent {

  url = 'https://vnexpress.net/12-000-nguoi-do-ve-cua-lo-4092705.html'
  constructor(private http: HttpClient){
         }

  getData(url: string): Observable<any>{
    return this.http.get(url);
  }
  }

  // meet.google.com/inu-umyr-hqz
  // Số điện thoại: (US) +1 612-504-9580
  // Mã PIN: 986 487 527#
