import { Component, OnInit } from '@angular/core';
import { Product, products } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  fontSizePx: number = 16;
  dataValue = 'test'
  price: number = 0
  products: Product[] = products;
  title = 'Cheap Product Pipe'

  addProduct(productName: string) {
    // Pure pipe won't update display because product array reference is unchanged
    this.products.push({
      name: productName, 
      price: this.price,
      id: 0,
      description: productName
    })
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/