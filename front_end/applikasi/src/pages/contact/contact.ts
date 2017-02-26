import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PostsService } from '../services/posts.service'

import { AlertController } from 'ionic-angular';

@Component({
  template: `
    <form (ngSubmit)="logForm()">
      <ion-item>
        <ion-label floating>Item name</ion-label>
        <ion-input type="text" [(ngModel)]="newitem.item_name" name="item_name"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Item unit</ion-label>
        <ion-select interface="action-sheet" [(ngModel)]="newitem.unit" name="unit">
          <ion-option>grams</ion-option>
          <ion-option>pieces</ion-option>
          <ion-option>slices</ion-option>
          <ion-option>litres</ion-option>
        </ion-select>
      </ion-item>
      <ion-item>
        <ion-label floating>Amount</ion-label>
        <ion-input type="number" [(ngModel)]="newitem.amount" name="amount"></ion-input>
      </ion-item>
      <button ion-button type="submit" block>Add Item</button>
    </form>
  `,
  providers: [PostsService]
})
export class ContactPage {
  newitem = {
    item_id: 1
  }

  constructor(public navCtrl: NavController, public postsService: PostsService, public alertCtrl: AlertController) {
    var item = [];
    this.postsService.getPosts('http://128.199.118.141:8008/api/list_item').subscribe(test => {
      console.log("LIST ITEM", test);
    });
  }

  logForm() {
    console.log(this.newitem);
    this.postsService.postRequest("http://128.199.118.141:8008/api/add_item", this.newitem)
    this.newitem = {
      item_id: 1
    }
    this.showPrompt();
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'SUCCESS',
      message: "Item successfully added",
    });
    prompt.present();
  }
  
}