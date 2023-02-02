import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  private _baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public getData(): Observable<Object> {
    return this.http.get(`${this._baseUrl}/graph`);
  }

  public getDataDonutsData():
    Observable<{
      labels: string[];
      values: any[];}
    > {
    return this.http.get(`${this._baseUrl}/graph`)
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
