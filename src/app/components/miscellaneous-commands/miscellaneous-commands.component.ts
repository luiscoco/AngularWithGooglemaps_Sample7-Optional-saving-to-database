import { Component } from '@angular/core';
import { TeslaHonkHornService } from '../../service/tesla-HonkHorn.service';
import { TeslaFlashLightsService } from '../../service/tesla-FlashLightsCommand.service';
import { TeslaRemoteStartService } from '../../service/tesla-RemoteStartCommand.service';
import { TeslaTriggerHomeLinkService } from '../../service/tesla-TriggerHomeLinkCommand.service';
import { TeslaDoorsUnlockService } from '../../service/tesla-DoorsUnlockCommand.service';
import { TeslaDoorsLockService } from '../../service/tesla-DoorsLockCommand.service';


@Component({
  selector: 'app-honk-horn',
  template: `
    <div class="container">
      <h1>Button Grid Example</h1>
      <section>
        <div class="grid-row">
          <button
            mat-raised-button
            color="primary"
            (click)="honkHorn()"
            style="margin-right: 10px;"
          >
            Honk Horn
          </button>
          <span class="spacer"></span>
          <button mat-raised-button color="primary" (click)="flashLights()">
            Flash Lights
          </button>
          <span class="spacer"></span>
        </div>
        <br />
        <mat-divider></mat-divider>
        <br />
        <div class="grid-row">
          <button
            mat-raised-button
            color="primary"
            (click)="remoteStart()"
            style="margin-right: 10px;"
          >
            Remote Start
          </button>
          <span class="spacer"></span>
          <button mat-raised-button color="primary" (click)="triggerHomeLink()">
            Trigger Home Link
          </button>
          <span class="spacer"></span>
        </div>
      </section>
      <br />
      <mat-divider></mat-divider>
      <br />
      <section>
        <div class="example-button-row">
          <button
            mat-raised-button
            color="primary"
            (click)="doorsLock()"
            style="margin-right: 10px;"
          >
            Doors Lock
          </button>
          <span class="spacer"></span>
          <button mat-raised-button color="primary" (click)="doorsUnlock()">
            Doors Unlock
          </button>
          <span class="spacer"></span>
        </div>
      </section>
      <br />
      <mat-divider></mat-divider>
      <br />
    </div>
  `,
  styles: [],
})
export class MiscellaneousCommandsComponent {
  constructor(
    private teslaHonkHornService: TeslaHonkHornService,
    private teslaFlashLightsService: TeslaFlashLightsService,
    private teslaRemoteStartService: TeslaRemoteStartService,
    private teslaTriggerHomeLinkService: TeslaTriggerHomeLinkService,
    private teslaDoorsUnlockService: TeslaDoorsUnlockService,
    private teslaDoorsLockService: TeslaDoorsLockService
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

  triggerHomeLink() {
    this.teslaTriggerHomeLinkService.triggerHomeLink().subscribe(
      () => {
        // Handle successful response if needed
        console.log('Trigger Home Link request sent successfully.');
      },
      (error: any) => {
        // Handle error if needed
        console.error('Failed to Trigger Home Link', error);
      }
    );
  }

  doorsLock() {
    this.teslaDoorsLockService.doorsLock().subscribe(
      () => {
        // Handle successful response if needed
        console.log('Trigger Doors Lock request sent successfully.');
      },
      (error: any) => {
        // Handle error if needed
        console.error('Failed to Doors Lock', error);
      }
    );
  }

  doorsUnlock() {
    this.teslaDoorsUnlockService.doorsUnlock().subscribe(
      () => {
        // Handle successful response if needed
        console.log('Trigger Doors Unlock request sent successfully.');
      },
      (error: any) => {
        // Handle error if needed
        console.error('Failed to Doors Unlock', error);
      }
    );
  }
}
