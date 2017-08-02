import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store'
@Injectable()
export class BlogActions {
    static REQUEST_BLOGS = 'REQUEST_BLOGS';
    loadBlogs(filter): any {
        return {
            type: BlogActions.REQUEST_BLOGS,
            payload: filter
        };
    }
    static LOAD_BLOGS_SUCCESS = 'LOAD_BLOGS_SUCCESS';
    loadBlogsSuccess(blogs): any {
        return {
            type: BlogActions.LOAD_BLOGS_SUCCESS,
            payload: blogs
        };
    }


}