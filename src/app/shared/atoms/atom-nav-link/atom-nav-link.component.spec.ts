import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomNavLinkComponent } from './atom-nav-link.component';

describe('AtomNavLinkComponent', () => {
  let component: AtomNavLinkComponent;
  let fixture: ComponentFixture<AtomNavLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomNavLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomNavLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
