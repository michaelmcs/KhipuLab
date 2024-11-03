import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHoursComponent } from './select-hours.component';

describe('SelectHoursComponent', () => {
  let component: SelectHoursComponent;
  let fixture: ComponentFixture<SelectHoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectHoursComponent]
    });
    fixture = TestBed.createComponent(SelectHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
