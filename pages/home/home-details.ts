import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IonicApp } from 'ionic-angular';
import { MyworldService } from '../../app/myworld.service'

@Component({
  selector: 'page-home-details',
  templateUrl: 'home-details.html',
  providers: [MyworldService]
})
export class HomeDetailsPage {

  myid = null;
  individualOne;
  data = [];
  arr = []

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
  public myWorld: MyworldService) {

    this.data = this.myWorld.returnMe();    
     this.myid = +this.activatedRoute.snapshot.params['student.cat_id']
     this.individualOne = this.myWorld.returnMe(this.myid);
      console.log('my cat_id is ' + this.myid);

      for (var i = 0; i < this.data.length; i++) {
      if (this.data[i].cat_id === this.myid) {
        this.arr.push({
          cat_id: this.data[i].cat_id, 
          cat_name: this.data[i].cat_name, 
          product_id: this.data[i].product_id, 
          product_name: this.data[i].product_name, 
          price: this.data[i].price, 
          image: this.data[i].image, 
          description: this.data[i].description
        }) 
      }

    }

      console.log('my arr ' + JSON.stringify(this.arr));
   }




}
