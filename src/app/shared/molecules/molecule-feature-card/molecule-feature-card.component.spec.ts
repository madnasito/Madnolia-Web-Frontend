import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeFeatureCardComponent } from './molecule-feature-card.component';

describe('MoleculeFeatureCardComponent', () => {
  let component: MoleculeFeatureCardComponent;
  let fixture: ComponentFixture<MoleculeFeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoleculeFeatureCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculeFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
