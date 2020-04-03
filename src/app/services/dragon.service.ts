import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Dragon } from '../models/dragon.model';

@Injectable()
export class DragonService {

  public API = '//localhost:8081';
  public STUDENT_API = this.API + '/dragons/';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.STUDENT_API );
  }

  get(id: string) {
    return this.http.get(this.STUDENT_API + '/' + id);
  }

  create(student: any): Observable<any> {
    return this.http.post(this.STUDENT_API, student);
  }

  update(student: Dragon): Observable<any> {
    console.log(student)
    return this.http.put(this.STUDENT_API +  student.id, student);
   
  }

  remove(id: string): Observable<any> {
    return this.http.delete(this.STUDENT_API +  id);
  }

  

}
