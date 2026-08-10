import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanPartyComponent } from './lan-party.component';

describe('LanPartyComponent', () => {
  let component: LanPartyComponent;
  let fixture: ComponentFixture<LanPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LanPartyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
