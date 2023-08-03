import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLoginUrlComponent } from './get-login-url.component';

describe('GetLoginUrlComponent', () => {
  let component: GetLoginUrlComponent;
  let fixture: ComponentFixture<GetLoginUrlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetLoginUrlComponent]
    });
    fixture = TestBed.createComponent(GetLoginUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
