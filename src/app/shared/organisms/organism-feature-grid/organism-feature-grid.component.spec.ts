import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismFeatureGridComponent } from './organism-feature-grid.component';

describe('OrganismFeatureGridComponent', () => {
  let component: OrganismFeatureGridComponent;
  let fixture: ComponentFixture<OrganismFeatureGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganismFeatureGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismFeatureGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
