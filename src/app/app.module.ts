import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { SlotComponent } from './slot/slot.component';
import { SlotBasicComponent } from './slot-basic/slot-basic.component';
import { AdComponent } from './ad/ad.component';
import { AdBannerComponent } from './ad/ad-banner.component';
import { ProfileComponent } from './ad/profile.component';
import { JobComponent } from './ad/job.component';
import { AdDirective } from './ad/ad.directive';
import { AdService } from './ad/ad.service';
import { SizerComponent } from './sizer/sizer.component';
import { CheapProductsPipe, ExpensiveProductsPipe, FetchShippingPipe } from './products.pipe';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'slot', component: SlotComponent },
      { path: 'ad', component: AdComponent }
    ]),
  ],
  providers: [AdService],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    SlotComponent,
    SlotBasicComponent,
    AdComponent,
    AdBannerComponent,
    ProfileComponent,
    JobComponent,
    AdDirective,
    SizerComponent,
    CheapProductsPipe,
    ExpensiveProductsPipe,
    FetchShippingPipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
