import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiSettingsComponent } from './gui-settings.component';

describe('GuiSettingsComponent', () => {
  let component: GuiSettingsComponent;
  let fixture: ComponentFixture<GuiSettingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuiSettingsComponent]
    });
    fixture = TestBed.createComponent(GuiSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
