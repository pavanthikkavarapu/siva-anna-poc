import { Injectable } from '@angular/core';
import { Observable, interval, pipe } from 'rxjs';
import 'rxjs/add/operator/map';
import {switchMap, map} from 'rxjs/operators';

import { HttpClientModule,HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }


  getOrderSummary(): Observable<any> {
    return this.http.get("assests/data.json")
                    .map((res:any) => res.json())
                    .catch((error:any) => console.log(error));
  }
}