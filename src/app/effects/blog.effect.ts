import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable'
import { Action } from "@ngrx/store";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { ApiService } from "../services/api.service";
import 'rxjs/add/observable/of';

@Injectable()
export class BlogEffects {
    constructor(
        private actions$: Actions,
        private blogService: ApiService,
    ) { }

    @Effect()
    loadBlogs$: Observable<Action> = this.actions$
        .ofType('REQUEST_BLOGS')
        .switchMap(action => this.blogService.getBlogs())
        .map((blogs: any) => ({ type : 'LOAD_SUCCESS', payload : blogs}))
		.catch ( err => Observable.of({type : 'LOAD_FAILED', payload : err}));
		
}