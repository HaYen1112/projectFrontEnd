import { Component, Injectable, Input } from '@angular/core';
import { HttpClient, HttpContext, HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ERROR_COUNT, RETRY_COUNT } from './app.module';
import {retry, tap} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable({providedIn: 'root'})
export class AppComponent {
  url = 'https://thoitrangtre.thanhnien.vn/phong-cach/muse-studios-nang-tho-cua-thoi-trang-ha-noi-khai-truong-cua-hang-moi-23449.html';
  constructor(private http: HttpClient){
        // this.http.get(this.url)
        // .toPromise().then((data: any) =>{
        //   console.log(data);
        // });
        this.http.get('https://thoitrangtre.thanhnien.vn/phong-cach/data/feed', {
      context: new HttpContext().set(RETRY_COUNT, 5),
    })
    .subscribe(results => {/* ... */});
         }
  getData(url: string): Observable<any>{
    return this.http.get(url);
  }
  }
  export class RetryInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const retryCount = req.context.get(RETRY_COUNT);
      return next.handle(req).pipe(
        retry(retryCount),
    );
  }
}
