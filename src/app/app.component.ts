import { Component } from '@angular/core';
import {ApiService} from './services/api.service'
import { Observable } from 'rxjs/Observable';
import {Store} from '@ngrx/store'

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
        this.blogs$ = this._store.select('blogsReducer') ;    
        this._service.getBlogs().subscribe(
          blogs=> { 
            console.log(blogs);
            this._store.dispatch({type : 'REQUEST_BLOGS', payload: blogs});
            }
        );
    //this.loadBlogs();
  }

    loadBlogs() {
      this._store.dispatch({type : 'ALL'});
    }
}