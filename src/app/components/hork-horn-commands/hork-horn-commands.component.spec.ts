import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorkHornCommandsComponent } from './hork-horn-commands.component';

describe('HorkHornCommandsComponent', () => {
  let component: HorkHornCommandsComponent;
  let fixture: ComponentFixture<HorkHornCommandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorkHornCommandsComponent]
    });
    fixture = TestBed.createComponent(HorkHornCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
