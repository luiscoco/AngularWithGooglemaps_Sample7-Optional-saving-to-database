import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeslaVehicleStateService } from '../../service/tesla-VehicleState.service';
import { interval, Subscription } from 'rxjs';

declare const google: any;

@Component({
  selector: 'app-vehicle-state',
  template: `
    <div>
      <h3>VEHICLE STATE</h3>
      <p>
        API_Version:
        {{ realTimeVehicleStateData.apiVersion }}
      </p>
      <p>
        Auto_Park_State_V2:
        {{ realTimeVehicleStateData.autoParkStateV2 }}
      </p>
      <p>
        Auto_Park_State_V3:
        {{ realTimeVehicleStateData.autoParkStateV3 }}
      </p>
      <p>
        Auto_Park_Style:
        {{ realTimeVehicleStateData.autoParkStyle }}
      </p>
      <p>
        Calendar_Supported:
        {{ realTimeVehicleStateData.calendarSupported }}
      </p>
      <p>
        Car_Version:
        {{ realTimeVehicleStateData.carVersion }}
      </p>
      <p>
        Center_Display_State:
        {{ realTimeVehicleStateData.centerDisplayState }}
      </p>
      <p>
        Dashcam_Clip_Save_Available:
        {{ realTimeVehicleStateData.dashcamClipSaveAvailable }}
      </p>
      <p>
        Dashcam_State:
        {{ realTimeVehicleStateData.dashcamState }}
      </p>
      <p>
        Driver_Front:
        {{ realTimeVehicleStateData.driverFront }}
      </p>
      <p>
        Driver_Rear:
        {{ realTimeVehicleStateData.driverRear }}
      </p>
      <p>
        Front_Driver_Window:
        {{ realTimeVehicleStateData.frontDriverWindow }}
      </p>
      <p>
        Feature_Bitmask:
        {{ realTimeVehicleStateData.featureBitmask }}
      </p>
      <p>
        Front_Passenger_Window:
        {{ realTimeVehicleStateData.frontPassengerWindow }}
      </p>
      <p>
        Front_Trunk:
        {{ realTimeVehicleStateData.frontTrunk }}
      </p>
      <p>
        Homelink_DeviceCount:
        {{ realTimeVehicleStateData.homelinkDeviceCount }}
      </p>
      <p>
        Homelink_Nearby:
        {{ realTimeVehicleStateData.homelinkNearby }}
      </p>
      <p>
        is_User_Present:
        {{ realTimeVehicleStateData.isUserPresent }}
      </p>
      <p>
        last_Autopark_Error:
        {{ realTimeVehicleStateData.lastAutoparkError }}
      </p>
      <p>
        Locked:
        {{ realTimeVehicleStateData.locked }}
      </p>
      <p>
        Media_Info_Audio_Volume:
        {{ realTimeVehicleStateData.mediaInfo.audioVolume }}
      </p>

      <!--  "mediaInfo": {
      "audioVolume": 2.3333, "audioVolumeIncrement": 0.333333,
      "audioVolumeMaximum": 10.333333, "mediaPlaybackStatus": "Stopped",
      "nowPlayingAlbum": "", "nowPlayingArtist": "", "nowPlayingDuration": 0,
      "nowPlayingElapsed": 0, "nowPlayingSource": "13", "nowPlayingStation":
      "DAB MEMORY", "nowPlayingTitle": "Jeanette - Sorrow" }, "mediaState": {
      "remoteControlEnabled": true }, "notificationsSupported": true,
      "odometer": 879.815047, "parsedCalendarSupport": true, "passengerFront":
      0, "passengerRear": 0, "rearDriverWindow": 0, "remoteStart": false,
      "remoteStartEnabled": true, "remoteStartSupported": true,
      "rearPassengerWindow": 0, "rearTrunk": 0, "santaMode": 0, "sentryMode":
      false, "sentryModeAvailable": true, "serviceMode": false,
      "serviceModePlus": false, "smartSummonAvailable": false, "softwareUpdate":
      { "downloadPercent": 0, "expectedDurationSeconds": 2700, "installPercent":
      1, "status": "", "version": " " }, "speedLimitMode": { "active": false,
      "currentLimitMilesPerHour": 85, "maximumLimitMilesPerHour": 120,
      "minimumLimitMilesPerHour": 50, "pinCodeSet": false },
      "summonStandbyModeEnabled": false, "sunRoofPercentOpen": null,
      "sunRoofState": null, "timestamp": 1691044279427,
      "tpmsHardWarningFrontLeft": false, "tpmsHardWarningFrontRight": false,
      "tpmsHardWarningRearLeft": false, "tpmsHardWarningRearRight": false,
      "tpmsLastSeenPressureTimeFrontLeft": 1691010987,
      "tpmsLastSeenPressureTimeFrontRight": 1691011016,
      "tpmsLastSeenPressureTimeRearLeft": 1691011016,
      "tpmsLastSeenPressureTimeRearRight": 1691010987, "tpmsPressureFrontLeft":
      3.025, "tpmsPressureFrontRight": 3.075, "tpmsPressureRearLeft": 3,
      "tpmsPressureRearRight": 3.025, "tpmsRecommendedColdPressureFrontValue":
      2.9, "tpmsRecommendedColdPressureRearValue": 2.9,
      "tpmsSoftWarningFrontLeft": false, "tpmsSoftWarningFrontRight": false,
      "tpmsSoftWarningRearLeft": false, "tpmsSoftWarningRearRight": false,
      "valetMode": false, "valetPINNeeded": true, "vehicleName": null,
      "vehicleSelfTestProgress": 0, "vehicleSelfTestRequested": false,
      "webcamAvailable": false } -->
    </div>
  `,
  styles: [
    `
      #map {
        height: 100%;
      }
    `,
  ],
})
export class VehicleStateComponent implements OnInit, OnDestroy {
  realTimeVehicleStateData: any;
  isRealTimeDataFetched = false;
  updateSubscription: Subscription | undefined; // Initialize the property as undefined
  formattedTimestamp!: string; // Property to store the formatted timestamp
  constructor(private teslaVehicleStateService: TeslaVehicleStateService) {}

  ngOnInit() {
    this.startRealTimeUpdates();
  }

  ngOnDestroy() {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }

  startRealTimeUpdates(): void {
    this.fetchRealTimeData(); // Fetch the real-time data immediately on component load
    // Use interval operator to fetch real-time data every 1 second
    this.updateSubscription = interval(6500).subscribe(() => {
      this.fetchRealTimeData();
    });
  }

  fetchRealTimeData(): void {
    this.teslaVehicleStateService.getRealTimeData().subscribe({
      next: (data: any) => {
        this.realTimeVehicleStateData = data;
        this.isRealTimeDataFetched = true; // Set the flag to true after fetching the real-time data
        console.log('Real-time data fetched:', data);
        // Convert the timestamp to a formatted date
        this.formattedTimestamp = this.formatTimestamp(
          this.realTimeVehicleStateData.timestamp / 1000
        ); // Convert to seconds by dividing by 1000
      },
      error: (error: any) => {
        console.error('Error fetching real-time data:', error);
      },
    });
  }

  // Function to convert timestamp to formatted date
  formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000); // Convert to milliseconds since JavaScript expects the time in milliseconds
    return date.toLocaleString(); // Change this to the desired format using toLocaleString()
  }
}
