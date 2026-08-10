import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeDownloadBtnComponent } from './molecule-download-btn.component';

describe('MoleculeDownloadBtnComponent', () => {
  let component: MoleculeDownloadBtnComponent;
  let fixture: ComponentFixture<MoleculeDownloadBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoleculeDownloadBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoleculeDownloadBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
