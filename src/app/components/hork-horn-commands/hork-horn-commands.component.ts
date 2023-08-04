import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeslaHonkHornService } from '../../service/tesla-HonkHorn.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-honk-horn',
  template: `
    <button mat-raised-button color="primary" (click)="honkHorn()">
      Honk Horn
    </button>
  `,
  styles: [],
})
export class HorkHornCommandsComponent {
  constructor(private teslaHonkHornService: TeslaHonkHornService) {}

  honkHorn() {
    this.teslaHonkHornService.honkHorn().subscribe(
      (response) => {
        // Handle successful response if needed
        console.log('Honk horn request sent successfully.');
      },
      (error) => {
        // Handle error if needed
        console.error('Failed to honk horn:', error);
      }
    );
  }
}
