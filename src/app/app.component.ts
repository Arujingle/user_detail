import { Component } from '@angular/core';
import {TaskComponent} from './task/task.component';
import {DotaskService} from './services/task.service';
import { PostserviceService} from './services/post/postservice.service';
import { Post } from './services/post/post.type';
import { Comment } from './services/post/comment.type';
import { User } from './services/post/user-type';
import { UserListComponent } from './user-list/user-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})


export class AppComponent {
  title = 'student';
  result;
  perimeter;
  areaCircle;
  posts: Post[];
  comments: Comment[];
  users: User[];
  usersDetail: User[];

  constructor(
    private myDotaskServices: DotaskService,
    private postServices: PostserviceService,
  ) {

  }

  getPost() {
    this.postServices.getPosts()
      .subscribe(res => {
        console.log(res);
        this.posts = res;
      });
  }


  getComments(id: number) {
    this.postServices.getComments(id)
    .subscribe(result => {
      console.log(result);
      this.comments = result.filter(c => c.postId === id).slice(0, 10);
    });
  }
   getUser() {
     this.postServices.getUsers()
     .subscribe(data => {
       console.log(data);
       this.users = data;
     });
   }

  doTask() {
    this.result = this.myDotaskServices.doFirstTask();

  }
  getPerimeter() {
    this.perimeter = this.myDotaskServices.doSecondTask();
  }
  getAreaCircle() {
    this.areaCircle = this.myDotaskServices.doThirdTask();
  }

}
