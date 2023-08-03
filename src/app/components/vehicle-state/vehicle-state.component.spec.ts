import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleStateComponent } from './vehicle-state.component';

describe('VehicleStateComponent', () => {
  let component: VehicleStateComponent;
  let fixture: ComponentFixture<VehicleStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleStateComponent]
    });
    fixture = TestBed.createComponent(VehicleStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
