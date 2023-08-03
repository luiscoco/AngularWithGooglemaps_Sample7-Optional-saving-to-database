import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCommandsComponent } from './media-commands.component';

describe('MediaCommandsComponent', () => {
  let component: MediaCommandsComponent;
  let fixture: ComponentFixture<MediaCommandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaCommandsComponent]
    });
    fixture = TestBed.createComponent(MediaCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
