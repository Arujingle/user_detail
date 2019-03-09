import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../services/post/postservice.service';
import { User } from '../services/post/user-type';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  // usersdetail: User[];

  constructor(
    private postServices: PostserviceService,
    private router: Router) { }

  ngOnInit() {
  }

  getUser() {
    this.postServices.getUsers()
    .subscribe(data => {
      console.log(data);
      this.users = data;
    });
  }

  onSelect(users) {
    this.router.navigate(['/detail', users.id]);

  }

  // getUserDetail(id) {
  //   this.postServices.get_user_detail(id)
  //   .subscribe(output => {
  //     console.log(output);
  //     // this.usersdetail = output;
  //   });
  // }

}
