import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http'

import {ApiService} from './services/api.service';

import {StoreModule } from '@ngrx/store'
import {blogsReducer} from './reducers/blogs.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { EffectsModule } from '@ngrx/effects'
import { BlogEffects } from './effects/blog.effect'
import { authorFilter } from './reducers/authorFilter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    StoreModule.forRoot({blogsReducer, authorFilter}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([BlogEffects])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }


// 1 ) Add npm install --save @ngrx/effects
// 2 )@Injectable()
// export class BlogEffects {
//     constructor(
//         private actions$: Actions,
//         private blogService: ApiService,
//     ) { }

//     @Effect()
//     loadBlogs$: Observable<Action> = this.actions$
//         .ofType('REQUEST_BLOGS')
//         .switchMap(action => this.blogService.getBlogs())
//         .map((blogs: any) => ({ type : 'LOAD_SUCCESS', payload : blogs}))
// 		.catch ( err => Observable.of({type : 'LOAD_FAILED', payload : err}));
		
// }
// 3 ) EffectsModule.forRoot([BlogEffects])
// 4)          
// this.blogs$ = this._store.select('blogsReducer') ; 
// this._store.dispatch({type : 'REQUEST_BLOGS'});
//  REQUEST_BLOGS will go to the effects, and effect will call webservive ,and dispatch the 
//  LOAD_SUCCESS which is used to update the view or html.
