import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../shipping.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css'],
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<{ type: string; price: number }[]>;

  constructor(private shippingService: ShippingService) {}

  ngOnInit(): void {
    this.shippingCosts = this.shippingService.getShippingPrices();
  }
}
