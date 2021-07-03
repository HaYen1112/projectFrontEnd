import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {map, catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class Data {

  baseUrl = 'assets/';

  constructor(private http: HttpClient) {
  }

  getData(url: string ): Observable<any> {
    return this.http.get(url);
  }
}
