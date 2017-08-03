import { Component } from '@angular/core';
import {ApiService} from './services/api.service'
import { Observable } from 'rxjs/Observable';
import {Store} from '@ngrx/store'
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    title = 'app';
    blogs$ : Observable<any>;

    constructor ( 
        private _service : ApiService,
        private _store : Store <any>
        )  {

    }
    ngOnInit () {
        //this.blogs$ = this._service.getBlogs();
        //this.blogs$ = this._store.select('blogsReducer') ;   

    this.blogs$ = Observable.combineLatest(
      this._store.select('blogsReducer'),
      this._store.select('authorFilter'),
      (blogs, authorFilter) => {
        console.log(blogs);
        //return blogs ? blogs.filter(author=>author.author === 'John') : [];
        return blogs ? blogs.filter(authorFilter) : [];
      }
    );

    this.blogs$.subscribe(log=>console.log(log));
    this._store.dispatch({type : 'REQUEST_BLOGS'});
    this._store.dispatch({ type: '', payload: { type: 'ALL', value: 'John' } });
    
    //this.loadBlogs();
  }

    loadBlogs() {
      this._store.dispatch({type : 'Other'});
    }
}