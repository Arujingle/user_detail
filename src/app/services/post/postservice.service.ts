import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.type';
import { Comment } from './comment.type';
import { User } from './user-type';
@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  host = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient ) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.host}/posts`);
  }

  getComments(id: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(`${this.host}/posts/${id}/comments`);
  }

  getUsers(): Observable <User[]> {
    return this.httpClient.get<User[]>(`${this.host}/users`);
  }
  get_user_detail(id: number): Observable <User> {
    return this.httpClient.get<User>(`${this.host}/users/${id}`);


  }

}
