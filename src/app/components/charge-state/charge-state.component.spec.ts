import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeStateComponent } from './charge-state.component';

describe('ChargeStateComponent', () => {
  let component: ChargeStateComponent;
  let fixture: ComponentFixture<ChargeStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChargeStateComponent]
    });
    fixture = TestBed.createComponent(ChargeStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
