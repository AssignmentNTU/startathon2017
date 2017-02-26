import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [PostsService]
})
export class AboutPage {
  posts = []
  public images = ["http://www.wildorganics.co.za/content/images/thumbs/0000210_butter-unsalted_100.jpeg", "http://www.humuch.com/item_images/a27613d5dab2c2f14c59a9e77911555bth.jpeg", "http://highermindsheadshop.co.uk/image/cache/data/MAIN/Cheese%20Strains-100x100.jpg"]

  constructor(public navCtrl: NavController, private postService: PostsService) {
    this.postService.getPosts("http://128.199.118.141:8008/api/list_item").subscribe(posts => {
      this.posts = posts['data']
      console.log(posts)
    })
  }

}
