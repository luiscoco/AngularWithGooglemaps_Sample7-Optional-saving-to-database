import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimateCommandsComponent } from './climate-commands.component';

describe('ClimateCommandsComponent', () => {
  let component: ClimateCommandsComponent;
  let fixture: ComponentFixture<ClimateCommandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClimateCommandsComponent]
    });
    fixture = TestBed.createComponent(ClimateCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
