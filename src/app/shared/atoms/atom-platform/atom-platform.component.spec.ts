import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomPlatformComponent } from './atom-platform.component';

describe('AtomPlatformComponent', () => {
  let component: AtomPlatformComponent;
  let fixture: ComponentFixture<AtomPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomPlatformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
