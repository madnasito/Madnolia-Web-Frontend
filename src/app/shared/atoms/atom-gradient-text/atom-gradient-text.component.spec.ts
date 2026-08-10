import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomGradientTextComponent } from './atom-gradient-text.component';

describe('AtomGradientTextComponent', () => {
  let component: AtomGradientTextComponent;
  let fixture: ComponentFixture<AtomGradientTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtomGradientTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomGradientTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
