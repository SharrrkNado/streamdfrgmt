import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Doc } from './svgdoc/svgdoc.component';
import * as Oboe from 'oboe';
@Injectable({
  providedIn: 'root'
})
export class SvgdataService {

  constructor(private http: HttpClient) { }

  public loadData(): Observable<Doc[]> {
    return this.http.get<Doc[]>('http://localhost:3000');
  }
  public loadAnyData(): Observable<Doc[]> {
    return this.http.get<any>('http://localhost:3001');
  }
  public loadFile(): Observable<Doc[]> {
    return this.http.get<Doc[]>('http://localhost:3000/file');
  }

  public loadViaOboe() {
    return new Observable<Doc>(subscriber => {
      // this.http.get<any>('http://localhost:3001').subscribe(chunk => {
      //   console.log(chunk)
      //   subscriber.next(chunk);
      // });

      // Oboe('http://localhost:3000/file')
      //   .node('![*]', (item) => {
      //     subscriber.next(item);
      //   })
      //   .done(() => {
      //     subscriber.complete();
      //   });

      Oboe('http://localhost:3001')
      .node('![*]', (item) => {
        console.log(item);
        subscriber.next(item);
      })
      .done(() => {
        subscriber.complete();
      });
    });
  }
}
