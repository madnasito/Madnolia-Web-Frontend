import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismHeroSectionComponent } from './organism-hero-section.component';

describe('OrganismHeroSectionComponent', () => {
  let component: OrganismHeroSectionComponent;
  let fixture: ComponentFixture<OrganismHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganismHeroSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
