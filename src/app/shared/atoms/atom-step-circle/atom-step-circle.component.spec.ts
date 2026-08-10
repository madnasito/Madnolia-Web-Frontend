import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomStepCircleComponent } from './atom-step-circle.component';

describe('AtomStepCircleComponent', () => {
  let component: AtomStepCircleComponent;
  let fixture: ComponentFixture<AtomStepCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomStepCircleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomStepCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
