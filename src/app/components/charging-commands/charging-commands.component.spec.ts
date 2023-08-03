import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargingCommandsComponent } from './charging-commands.component';

describe('ChargingCommandsComponent', () => {
  let component: ChargingCommandsComponent;
  let fixture: ComponentFixture<ChargingCommandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChargingCommandsComponent]
    });
    fixture = TestBed.createComponent(ChargingCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
