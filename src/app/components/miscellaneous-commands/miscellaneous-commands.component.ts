import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TeslaHonkHornService } from '../../service/tesla-HonkHornCommand.service';
import { TeslaFlashLightsService } from '../../service/tesla-FlashLightsCommand.service';
import { TeslaRemoteStartService } from '../../service/tesla-RemoteStartCommand.service';



@Component({
  selector: 'app-honk-horn',
  template: `
    <button mat-raised-button color="primary" (click)="honkHorn()">
      Honk Horn
    </button>
    <button mat-raised-button color="accent" (click)="flashLights()">
      Flash Lights
    </button>
    <button mat-raised-button color="danger" (click)="remoteStart()">
      Remote Start
    </button>
  `,
  styles: [],
})
export class MiscellaneousCommandsComponent {
  constructor(
    private teslaHonkHornService: TeslaHonkHornService,
    private teslaFlashLightsService: TeslaFlashLightsService,
    private teslaRemoteStartService: TeslaRemoteStartService
  ) {}

  honkHorn() {
    this.teslaHonkHornService.honkHorn().subscribe(
      () => {
        // Handle successful response if needed
        console.log('Honk horn request sent successfully.');
      },
      (error) => {
        // Handle error if needed
        console.error('Failed to honk horn:', error);
      }
    );
  }

  flashLights() {
    this.teslaFlashLightsService.flashLights().subscribe(
      () => {
        // Handle successful response if needed
        console.log('Flash Lights request sent successfully.');
      },
      (error: any) => {
        // Handle error if needed
        console.error('Failed to Flash Lights:', error);
      }
    );
  }

  remoteStart() {
    this.teslaRemoteStartService.remoteStart().subscribe(
      () => {
        // Handle successful response if needed
        console.log('Remote Start request sent successfully.');
      },
      (error: any) => {
        // Handle error if needed
        console.error('Failed to Remote Start', error);
      }
    );
  }
}
