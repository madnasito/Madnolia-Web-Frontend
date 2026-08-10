import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomFeatureIconComponent } from './atom-feature-icon.component';

describe('AtomFeatureIconComponent', () => {
  let component: AtomFeatureIconComponent;
  let fixture: ComponentFixture<AtomFeatureIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomFeatureIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomFeatureIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
