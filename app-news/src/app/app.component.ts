import { Component, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { parseCommandLine } from 'typescript';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable({providedIn: 'root'})
export class AppComponent {
  url = 'https://thanhnien.vn/video/thoi-su/ha-noi-dinh-chi-hieu-thuoc-95-lang-ha-dang-la-o-dich-lay-nhiem-covid-19-164221v.html'
  constructor(private http: HttpClient){
        }

  getData(url: string): Observable<any>{
    return this.http.get(url);
  }
  }
  // meet.google.com/inu-umyr-hqz
  // Số điện thoại: (US) +1 612-504-9580
  // Mã PIN: 986 487 527#
