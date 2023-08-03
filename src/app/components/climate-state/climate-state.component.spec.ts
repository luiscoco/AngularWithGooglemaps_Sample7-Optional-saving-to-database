import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateStateComponent } from './climate-state.component';

describe('ClimateStateComponent', () => {
  let component: ClimateStateComponent;
  let fixture: ComponentFixture<ClimateStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClimateStateComponent]
    });
    fixture = TestBed.createComponent(ClimateStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
