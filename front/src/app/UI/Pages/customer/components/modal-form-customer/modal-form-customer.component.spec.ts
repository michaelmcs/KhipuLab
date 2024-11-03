import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormCustomerComponent } from './modal-form-customer.component';

describe('ModalFormCustomerComponent', () => {
  let component: ModalFormCustomerComponent;
  let fixture: ComponentFixture<ModalFormCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFormCustomerComponent]
    });
    fixture = TestBed.createComponent(ModalFormCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
