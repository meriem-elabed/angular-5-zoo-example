import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LocationService {

  public API = '//localhost:8081';
  public LOCATION_API = this.API + '/locations/';

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<any> {
    return this.http.get(this.LOCATION_API);
  }



}
