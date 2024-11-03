import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalBookingComponent } from './modal-booking.component';

describe('ModalBookingComponent', () => {
  let component: ModalBookingComponent;
  let fixture: ComponentFixture<ModalBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalBookingComponent]
    });
    fixture = TestBed.createComponent(ModalBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
