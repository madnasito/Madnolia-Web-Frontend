import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeStepCardComponent } from './molecule-step-card.component';

describe('MoleculeStepCardComponent', () => {
  let component: MoleculeStepCardComponent;
  let fixture: ComponentFixture<MoleculeStepCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoleculeStepCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculeStepCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
