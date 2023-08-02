import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearChargersComponent } from './near-chargers.component';

describe('NearChargersComponent', () => {
  let component: NearChargersComponent;
  let fixture: ComponentFixture<NearChargersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NearChargersComponent]
    });
    fixture = TestBed.createComponent(NearChargersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
