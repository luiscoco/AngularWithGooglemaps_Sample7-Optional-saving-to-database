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
      <p>
        Media_Info_Audio_Volume_Increment:
        {{ realTimeVehicleStateData.mediaInfo.audioVolumeIncrement }}
      </p>
      <p>
        Media_Info_Audio_Volume_Maximum:
        {{ realTimeVehicleStateData.mediaInfo.audioVolumeMaximum }}
      </p>
      <p>
        Media_Info_Playback_Status:
        {{ realTimeVehicleStateData.mediaInfo.mediaPlaybackStatus }}
      </p>
      <p>
        Media_Info_Now_Playing_Album:
        {{ realTimeVehicleStateData.mediaInfo.nowPlayingAlbum }}
      </p>
      <p>
        Media_Info_Now_Playing_Artist:
        {{ realTimeVehicleStateData.mediaInfo.nowPlayingArtist }}
      </p>
      <p>
        Media_Info_Now_Playing_Duration:
        {{ realTimeVehicleStateData.mediaInfo.nowPlayingDuration }}
      </p>
      <p>
        Media_Info_Now_Playing_Elapsed:
        {{ realTimeVehicleStateData.mediaInfo.nowPlayingElapsed }}
      </p>
      <p>
        Media_Info_Now_Playing_Source:
        {{ realTimeVehicleStateData.mediaInfo.nowPlayingSource }}
      </p>
      <p>
        Media_Info_Now_Playing_Station:
        {{ realTimeVehicleStateData.mediaInfo.nowPlayingStation }}
      </p>
      <p>
        Media_Info_Now_Playing_Title
        {{ realTimeVehicleStateData.mediaInfo.nowPlayingTitle }}
      </p>
      <p>
        Media_State_Remote_Control_Enabled
        {{ realTimeVehicleStateData.mediaState.remoteControlEnabled }}
      </p>
      <p>
        Notifications_Supported
        {{ realTimeVehicleStateData.notificationsSupported }}
      </p>
      <p>
        Odometer(km)
        {{ this.realTimeVehicleStateData.odometer * 1.60934 }}
      </p>
      <p>
        Parsed_Calendar_Support
        {{ this.realTimeVehicleStateData.parsedCalendarSupport }}
      </p>
      <p>
        Passenger_Front
        {{ this.realTimeVehicleStateData.passengerFront }}
      </p>
      <p>
        Passenger_Rear
        {{ this.realTimeVehicleStateData.passengerRear }}
      </p>
      <p>
        Rear_Driver_Window
        {{ this.realTimeVehicleStateData.rearDriverWindow }}
      </p>
      <p>
        Remote_Start
        {{ this.realTimeVehicleStateData.remoteStart }}
      </p>
      <p>
        Remote_Start_Enabled
        {{ this.realTimeVehicleStateData.remoteStartEnabled }}
      </p>
      <p>
        Remote_Start_Supported
        {{ this.realTimeVehicleStateData.remoteStartSupported }}
      </p>
      <p>
        Rear_Passenger_Window
        {{ this.realTimeVehicleStateData.rearPassengerWindow }}
      </p>
      <p>
        Rear_Trunk
        {{ this.realTimeVehicleStateData.rearTrunk }}
      </p>

      <!-- "santaMode": 0, "sentryMode": false, "sentryModeAvailable": true,
       "serviceMode": false, "serviceModePlus": false, "smartSummonAvailable": false,
        "softwareUpdate": { "downloadPercent": 0, "expectedDurationSeconds": 2700, "installPercent":
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
