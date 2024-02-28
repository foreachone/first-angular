import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { products } from '../products';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  
  products = [...products];
  childValue = '';

  @ViewChild(ProductAlertsComponent)
  private productAlertsComponent!: ProductAlertsComponent;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  seconds() { return 0; }

  // ngAfterViewInit() {
  //   // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
  //   // but wait a tick first to avoid one-time devMode
  //   // unidirectional-data-flow-violation error
  //   setTimeout(() => this.seconds = () => this.productAlertsComponent.seconds, 0);
  // }

  start() { this.productAlertsComponent.test(); }
  stop() { this.productAlertsComponent.test(); }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
