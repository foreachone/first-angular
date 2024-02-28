import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotBasicComponent } from './slot-basic.component';

describe('SlotBasicComponent', () => {
  let component: SlotBasicComponent;
  let fixture: ComponentFixture<SlotBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlotBasicComponent]
    });
    fixture = TestBed.createComponent(SlotBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
