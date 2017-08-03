import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {

  }

  public getBlogs(): Observable<any[]> {

    return this.http
      .get('http://localhost:3000/blogs')
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  public getAuthors(): Observable<any[]> {

    return this.http
      .get('http://localhost:3000/authors')
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
