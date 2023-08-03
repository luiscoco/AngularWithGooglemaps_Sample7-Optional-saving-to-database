import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTokenAfterLoginComponent } from './get-token-after-login.component';

describe('GetTokenAfterLoginComponent', () => {
  let component: GetTokenAfterLoginComponent;
  let fixture: ComponentFixture<GetTokenAfterLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetTokenAfterLoginComponent]
    });
    fixture = TestBed.createComponent(GetTokenAfterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
