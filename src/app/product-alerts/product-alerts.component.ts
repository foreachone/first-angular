import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  
  
  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

  testValue = 'testValue'

  // if the component has bound inputs, whenever one or more data-bound input properties change
  ngOnChanges(changes: SimpleChanges): void {
    console.log('change')
    console.log(changes)
    console.log(changes['product'].currentValue)
    console.log(changes['product'].previousValue)
  }
  // Called once, after the first ngOnChanges().
  ngOnInit(): void {
    console.log('init')
   //this.testValue = 'test'
  }
  // Called immediately after ngOnChanges() on every change detection run, 
  // and immediately after ngOnInit() on the first run.
  ngDoCheck(): void {
    console.log('do check')
  }
  // Called once after the first ngDoCheck().
  ngAfterContentInit(): void {
    console.log('After content Init')
  }

  // Called after ngAfterContentInit() 
  // and every subsequent ngDoCheck().
  ngAfterContentChecked(): void {
    console.log('After content checked')
  }

  // Called once after the first ngAfterContentChecked().
  ngAfterViewInit(): void {
    console.log('After view init')
  }

  // Called after the ngAfterViewInit() 
  // and every subsequent ngAfterContentChecked().
  ngAfterViewChecked(): void {
    console.log('After view checked')
  }

  // Called immediately before Angular destroys the directive or component.
  ngOnDestroy(): void {
    console.log('destroy')
  }

  test() {
    window.alert('Local variable to pass data between child & parent');
  }
  
  
}
