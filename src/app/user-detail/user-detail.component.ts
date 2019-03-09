import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostserviceService } from '../services/post/postservice.service';
import { User } from '../services/post/user-type';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
   public userId ;
   public inform ;

  constructor(
    private route: ActivatedRoute,
    private postService: PostserviceService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userId = id;
    this.postService.get_user_detail(this.userId)
    .subscribe(data => {
      console.log(data);
      this.user = data;
  });
}
}
