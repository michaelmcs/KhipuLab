import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuipuVisualizationComponent } from './quipu-visualization.component';

describe('QuipuVisualizationComponent', () => {
  let component: QuipuVisualizationComponent;
  let fixture: ComponentFixture<QuipuVisualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuipuVisualizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuipuVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
