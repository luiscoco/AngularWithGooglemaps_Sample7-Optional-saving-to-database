import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperChargersComponent } from './super-chargers.component';

describe('SuperChargersComponent', () => {
  let component: SuperChargersComponent;
  let fixture: ComponentFixture<SuperChargersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperChargersComponent]
    });
    fixture = TestBed.createComponent(SuperChargersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
