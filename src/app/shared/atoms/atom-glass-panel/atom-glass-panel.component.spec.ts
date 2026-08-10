import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomGlassPanelComponent } from './atom-glass-panel.component';

describe('AtomGlassPanelComponent', () => {
  let component: AtomGlassPanelComponent;
  let fixture: ComponentFixture<AtomGlassPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomGlassPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomGlassPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
