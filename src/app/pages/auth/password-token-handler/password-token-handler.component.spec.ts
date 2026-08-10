import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordTokenHandlerComponent } from './password-token-handler.component';

describe('PasswordTokenHandlerComponent', () => {
  let component: PasswordTokenHandlerComponent;
  let fixture: ComponentFixture<PasswordTokenHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordTokenHandlerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordTokenHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
