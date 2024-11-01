import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFormLaboratoryComponent } from './modal-form-laboratory.component';

describe('ModalFormLaboratoryComponent', () => {
  let component: ModalFormLaboratoryComponent;
  let fixture: ComponentFixture<ModalFormLaboratoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalFormLaboratoryComponent]
    });
    fixture = TestBed.createComponent(ModalFormLaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
