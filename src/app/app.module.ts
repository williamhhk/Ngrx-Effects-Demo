import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http'

import {ApiService} from './services/api.service';

import {StoreModule } from '@ngrx/store'
import {blogsReducer} from './reducers/blogs.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    StoreModule.forRoot({blogsReducer}),
    StoreDevtoolsModule.instrument(),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
