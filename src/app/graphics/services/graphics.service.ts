import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  constructor(private http: HttpClient) {}

  public getData(): Observable<Object> {
    return this.http.get('http://localhost:3000/graph');
  }

  public getDataDonutsData():
    Observable<{
      labels: string[];
      values: any[];}
    > {
    return this.http.get('http://localhost:3000/graph')
      .pipe(
        delay(1500),
        map(data => {
          const labels = Object.keys(data);
          const values = Object.values(data);
          return { labels, values };
        })
      );
  }
}
