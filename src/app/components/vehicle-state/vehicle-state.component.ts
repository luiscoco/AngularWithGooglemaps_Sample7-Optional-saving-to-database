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
      <p>
        Santa_Mode
        {{ this.realTimeVehicleStateData.santaMode }}
      </p>
      <p>
        Sentry_Mode
        {{ this.realTimeVehicleStateData.sentryMode }}
      </p>
      <p>
        Sentry_Mode_Available
        {{ this.realTimeVehicleStateData.sentryModeAvailable }}
      </p>
      <p>
        Sentry_Mode
        {{ this.realTimeVehicleStateData.serviceMode }}
      </p>
      <p>
        Sentry_Mode_Plus
        {{ this.realTimeVehicleStateData.serviceModePlus }}
      </p>
      <p>
        Smart_Summon_Available
        {{ this.realTimeVehicleStateData.smartSummonAvailable }}
      </p>
      <p>
        Software_Update_Download_Percent
        {{ this.realTimeVehicleStateData.softwareUpdate.downloadPercent }}
      </p>
      <p>
        Software_Update_Expected_Duration_Seconds
        {{
          this.realTimeVehicleStateData.softwareUpdate.expectedDurationSeconds
        }}
      </p>
      <p>
        Software_Update_Install_Percent
        {{ this.realTimeVehicleStateData.softwareUpdate.installPercent }}
      </p>
      <p>
        Software_Update_Status
        {{ this.realTimeVehicleStateData.softwareUpdate.status }}
      </p>
      <p>
        Software_Update_Version
        {{ this.realTimeVehicleStateData.softwareUpdate.version }}
      </p>
      <p>
        Speed_Limit_Mode_Active
        {{ this.realTimeVehicleStateData.speedLimitMode.active }}
      </p>
      <p>
        Speed_Limit_Mode_Current_Limit_Miles_Per_Hour
        {{
          this.realTimeVehicleStateData.speedLimitMode.currentLimitMilesPerHour
        }}
      </p>
      <p>
        Speed_Limit_Mode_Maximum_Limit_Miles_Per_Hour
        {{
          this.realTimeVehicleStateData.speedLimitMode.maximumLimitMilesPerHour
        }}
      </p>
      <p>
        Speed_Limit_Mode_Minimum_Limit_Miles_Per_Hour
        {{
          this.realTimeVehicleStateData.speedLimitMode.minimumLimitMilesPerHour
        }}
      </p>
      <p>
        Speed_Limit_Mode_Pin_Code_Set
        {{ this.realTimeVehicleStateData.speedLimitMode.pinCodeSet }}
      </p>
      <p>
        Summon_Stand_by_Mode_Enabled
        {{ this.realTimeVehicleStateData.summonStandbyModeEnabled }}
      </p>
      <p>
        Sun_Roof_Percent_Open
        {{ this.realTimeVehicleStateData.sunRoofPercentOpen }}
      </p>
      <p>
        Sun_Roof_State
        {{ this.realTimeVehicleStateData.sunRoofState }}
      </p>
      <p>
        timestamp
        {{ this.realTimeVehicleStateData.timestamp }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_HardWarning_FrontLeft
        {{ this.realTimeVehicleStateData.tpmsHardWarningFrontLeft }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_HardWarning_FrontRight
        {{ this.realTimeVehicleStateData.tpmsHardWarningFrontRight }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_HardWarning_RearLeft
        {{ this.realTimeVehicleStateData.tpmsHardWarningRearLeft }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_HardWarning_RearRight
        {{ this.realTimeVehicleStateData.tpmsHardWarningRearRight }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_LastSeenPressureTime_FrontLeft
        {{ this.realTimeVehicleStateData.tpmsLastSeenPressureTimeFrontLeft }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_LastSeenPressureTime_FrontRight
        {{ this.realTimeVehicleStateData.tpmsLastSeenPressureTimeFrontRight }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_LastSeenPressureTime_RearLeft
        {{ this.realTimeVehicleStateData.tpmsLastSeenPressureTimeRearLeft }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_LastSeenPressureTime_RearRight
        {{ this.realTimeVehicleStateData.tpmsLastSeenPressureTimeRearRight }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_Pressure_FrontLeft(bar)
        {{ this.realTimeVehicleStateData.tpmsPressureFrontLeft }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_Pressure_FrontRight(bar)
        {{ this.realTimeVehicleStateData.tpmsPressureFrontRight }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_Pressure_RearLeft(bar)
        {{ this.realTimeVehicleStateData.tpmsPressureRearLeft }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_Pressure_RearRight(bar)
        {{ this.realTimeVehicleStateData.tpmsPressureRearRight }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_Recommended_Cold_Pressure_Front_Value(bar)
        {{
          this.realTimeVehicleStateData.tpmsRecommendedColdPressureFrontValue
        }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_Recommended_Cold_Pressure_Rear_Value(bar)
        {{ this.realTimeVehicleStateData.tpmsRecommendedColdPressureRearValue }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_Recommended_Cold_Pressure_Rear_Value(bar)
        {{ this.realTimeVehicleStateData.tpmsRecommendedColdPressureRearValue }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_SoftWarning_FrontLeft
        {{ this.realTimeVehicleStateData.tpmsSoftWarningFrontLeft }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_SoftWarning_FrontRight
        {{ this.realTimeVehicleStateData.tpmsSoftWarningFrontRight }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_SoftWarning_RearLeft
        {{ this.realTimeVehicleStateData.tpmsSoftWarningRearLeft }}
      </p>
      <p>
        Tires_Pressure_Monitoring_System_SoftWarning_RearRight
        {{ this.realTimeVehicleStateData.tpmsSoftWarningRearRight }}
      </p>
      <p>
        Valet_Mode
        {{ this.realTimeVehicleStateData.valetMode }}
      </p>
      <p>
        valet_PIN_Needed
        {{ this.realTimeVehicleStateData.valetPINNeeded }}
      </p>
      <p>
        vehicle_Name
        {{ this.realTimeVehicleStateData.vehicleName }}
      </p>
      <p>
        vehicle_Self_Test_Progress
        {{ this.realTimeVehicleStateData.vehicleSelfTestProgress }}
      </p>
      <p>
        vehicle_Self_Test_Requested
        {{ this.realTimeVehicleStateData.vehicleSelfTestRequested }}
      </p>
      <p>
        webcam_Available
        {{ this.realTimeVehicleStateData.webcamAvailable }}
      </p>
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
