import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabSampleComponent } from './lab-sample.component';

describe('LabSampleComponent', () => {
  let component: LabSampleComponent;
  let fixture: ComponentFixture<LabSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
