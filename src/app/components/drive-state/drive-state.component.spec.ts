import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveStateComponent } from './drive-state.component';

describe('DriveStateComponent', () => {
  let component: DriveStateComponent;
  let fixture: ComponentFixture<DriveStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DriveStateComponent]
    });
    fixture = TestBed.createComponent(DriveStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
