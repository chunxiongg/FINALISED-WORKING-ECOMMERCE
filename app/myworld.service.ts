import { Injectable } from '@angular/core';

@Injectable() 

export class MyworldService {

  constructor() { }

   Arr = [
    {
      cat_id: 1, cat_name: 'Category A', product_id: 1, product_name: 'Product A', price: 5, count:0,
      image: 'assets/A.jpg', description: 'A des in Category A'
    },
    {
      cat_id: 1, cat_name: 'Category A', product_id: 2, product_name: 'Product B', price: 5, count:0,
      image: 'assets/A.jpg', description: 'B des in category A'
    },
    {
      cat_id: 2, cat_name: 'Category B', product_id: 1, product_name: 'Product B', price: 5, count:0,
      image: 'assets/B.jpg', description: 'A des in category B'
    },
  ]

  returnMe(myid) {
    return this.Arr;
  }

}