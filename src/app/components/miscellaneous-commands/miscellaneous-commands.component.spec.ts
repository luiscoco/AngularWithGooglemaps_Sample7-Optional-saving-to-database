import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscellaneousCommandsComponent } from './miscellaneous-commands.component';

describe('MiscellaneousCommandsComponent', () => {
  let component: MiscellaneousCommandsComponent;
  let fixture: ComponentFixture<MiscellaneousCommandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiscellaneousCommandsComponent]
    });
    fixture = TestBed.createComponent(MiscellaneousCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
