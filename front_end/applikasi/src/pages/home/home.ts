import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PostsService]
})
export class HomePage {
  posts = [];
  finalurl = "http://food2fork.com/api/search?key=80234fcad144427625aad7346d777c2c&q=chicken%20breast,cheese,butter"
  
  constructor(private postsService: PostsService, public navCtrl: NavController) {
      this.postsService.getPosts(this.finalurl).subscribe(posts => {
        this.posts = posts['recipes'];
      })
  }

}

// interface Post{
//    id: number;
//    title: string;
//    body: string;
//  }
