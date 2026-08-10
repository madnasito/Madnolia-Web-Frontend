import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismSplitInfoComponent } from './organism-split-info.component';

describe('OrganismSplitInfoComponent', () => {
  let component: OrganismSplitInfoComponent;
  let fixture: ComponentFixture<OrganismSplitInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganismSplitInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganismSplitInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
