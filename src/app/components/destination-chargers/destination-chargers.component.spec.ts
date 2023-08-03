import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationChargersComponent } from './destination-chargers.component';

describe('DestinationChargersComponent', () => {
  let component: DestinationChargersComponent;
  let fixture: ComponentFixture<DestinationChargersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationChargersComponent]
    });
    fixture = TestBed.createComponent(DestinationChargersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
