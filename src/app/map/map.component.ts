import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeslaDriveStateService } from '../service/tesla-DriveState.service';
import { TeslaClimateStateDataService } from '../service/tesla-ClimateState.service';
import { TeslaChargeStateService } from '../service/tesla-ChargeState.service';
import { interval, Subscription } from 'rxjs';

declare const google: any;

@Component({
  selector: 'app-map',
  template: `
    <div id="map" style="width: 100%; height: 400px;"></div>
    <div *ngIf="realTimeDriveStateData">
      <h3>DRIVE CONDITIONS</h3>
      <p>
        ActiveRouteLatitude: {{ realTimeDriveStateData.activeRouteLatitude }}
      </p>
      <p>
        ActiveRouteLongitude: {{ realTimeDriveStateData.activeRouteLongitude }}
      </p>
      <p>
        ActiveRouteTrafficMinutesDelay:
        {{ realTimeDriveStateData.activeRouteTrafficMinutesDelay }}
      </p>
      <p>GPSasOf: {{ realTimeDriveStateData.gpsAsOf }}</p>
      <p>Headin: {{ realTimeDriveStateData.headin }}</p>
      <p>Latitude: {{ realTimeDriveStateData.latitude }}</p>
      <p>Latitude: {{ realTimeDriveStateData.longitude }}</p>
      <p>NativeLatitude: {{ realTimeDriveStateData.nativeLatitude }}</p>
      <p>NativeLongitude: {{ realTimeDriveStateData.nativeLongitude }}</p>
      <p>NativeType: {{ realTimeDriveStateData.nativeType }}</p>
      <p>Power: {{ realTimeDriveStateData.power }}</p>
      <p>ShiftState: {{ realTimeDriveStateData.shiftState }}</p>
      <p>Speed: {{ realTimeDriveStateData.speed }}</p>
      <p>Timestamp: {{ realTimeDriveStateData.timestamp }}</p>
      <p>Timestamp: {{ formattedTimestamp }}</p>
      <h3>CLIMATE CONDITIONS</h3>
      <p>
        AllowCabinOverheatProtection:
        {{ realTimeClimateStateData.allowCabinOverheatProtection }}
      </p>
      <p>
        AutoSeatClimateLeft:
        {{ realTimeClimateStateData.autoSeatClimateLeft }}
      </p>
      <p>
        AutoSeatClimateRight:
        {{ realTimeClimateStateData.autoSeatClimateRight }}
      </p>
      <p>
        BatteryHeater:
        {{ realTimeClimateStateData.batteryHeater }}
      </p>
      <p>
        BatteryHeaterNoPower:
        {{ realTimeClimateStateData.batteryHeaterNoPower }}
      </p>
      <p>
        BioweaponMode:
        {{ realTimeClimateStateData.bioweaponMode }}
      </p>
      <p>
        CabinOverheatProtection:
        {{ realTimeClimateStateData.cabinOverheatProtection }}
      </p>
      <p>
        CabinOverheatProtectionActivelyCooling:
        {{ realTimeClimateStateData.CabinOverheatProtectionActivelyCooling }}
      </p>
      <p>
        ClimateKeeperMode:
        {{ realTimeClimateStateData.climateKeeperMode }}
      </p>
      <p>
        CabinOverheatProtectionActivationTemperature:
        {{
          realTimeClimateStateData.cabinOverheatProtectionActivationTemperature
        }}
      </p>
      <p>
        DefrostMode:
        {{ realTimeClimateStateData.defrostMode }}
      </p>
      <p>
        DriverTemperatureSetting:
        {{ realTimeClimateStateData.driverTemperatureSetting }}
      </p>
      <p>
        FanStatus:
        {{ realTimeClimateStateData.fanStatus }}
      </p>
      <p>
        HVAC_AutoRequest:
        {{ realTimeClimateStateData.hvacAutoRequest }}
      </p>
      <p>
        Inside_Temperature:
        {{ realTimeClimateStateData.insideTemperature }}
      </p>
      <p>
        Is_AutoConditioning_On:
        {{ realTimeClimateStateData.isAutoConditioningOn }}
      </p>
      <p>
        Is_Climate_On:
        {{ realTimeClimateStateData.isClimateOn }}
      </p>
      <p>
        Is_Front_Defroster_On:
        {{ realTimeClimateStateData.isFrontDefrosterOn }}
      </p>
      <p>
        Is_Preconditioning:
        {{ realTimeClimateStateData.isPreconditioning }}
      </p>
      <p>
        Is_RearDefroster_On:
        {{ realTimeClimateStateData.isRearDefrosterOn }}
      </p>
      <p>
        Left_Temperature_Direction:
        {{ realTimeClimateStateData.leftTemperatureDirection }}
      </p>
      <p>
        Maximum_Available_Temperature:
        {{ realTimeClimateStateData.maximumAvailableTemperature }}
      </p>
      <p>
        Minimum_Available_Temperature:
        {{ realTimeClimateStateData.minimumAvailableTemperature }}
      </p>
      <p>
        Outside_Temperature:
        {{ realTimeClimateStateData.outsideTemperature }}
      </p>
      <p>
        Passenger_Temp_Setting:
        {{ realTimeClimateStateData.passengerTempSetting }}
      </p>
      <p>
        Remote_Heater_Control_Enabled:
        {{ realTimeClimateStateData.remoteHeaterControlEnabled }}
      </p>
      <p>
        right_Temp_Direction:
        {{ realTimeClimateStateData.rightTempDirection }}
      </p>
      <p>
        Seat_Heater_Left:
        {{ realTimeClimateStateData.seatHeaterLeft }}
      </p>
      <p>
        Seat_Heater_Rear_Center:
        {{ realTimeClimateStateData.seatHeaterRearCenter }}
      </p>
      <p>
        Seat_Heater_Rear_Left:
        {{ realTimeClimateStateData.seatHeaterRearLeft }}
      </p>
      <p>
        Seat_Heater_Rear_Right:
        {{ realTimeClimateStateData.seatHeaterRearRight }}
      </p>
      <p>
        Seat_Heater_Right:
        {{ realTimeClimateStateData.seatHeaterRight }}
      </p>
      <p>
        Side_Mirror_Heaters:
        {{ realTimeClimateStateData.sideMirrorHeaters }}
      </p>
      <p>
        Steering_Wheel_Heater:
        {{ realTimeClimateStateData.steeringWheelHeater }}
      </p>
      <p>
        Supports_Fan_Only_Cabin_Overheat_Protection:
        {{ realTimeClimateStateData.supportsFanOnlyCabinOverheatProtection }}
      </p>
      <p>
        TimeStamp:
        {{ realTimeClimateStateData.timestamp }}
      </p>
      <p>Timestamp: {{ formattedTimestamp }}</p>
      <p>
        Wiper_Blade_Heater:
        {{ realTimeClimateStateData.wiperBladeHeater }}
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
export class MapComponent implements OnInit, OnDestroy {
  realTimeDriveStateData: any;
  realTimeClimateStateData: any;
  realTimeChargeStateData: any;
  isRealTimeDataFetched = false;
  map: any;
  marker: any;
  updateSubscription: Subscription | undefined; // Initialize the property as undefined
  formattedTimestamp!: string; // Property to store the formatted timestamp
  constructor(
    private teslaDriveStateService: TeslaDriveStateService,
    private teslaClimateStateDataService: TeslaClimateStateDataService,
    private teslaChargeStateService: TeslaChargeStateService
  ) {}

  ngOnInit() {
    this.initMap();
    this.startRealTimeUpdates();
  }

  ngOnDestroy() {
    if (this.updateSubscription) {
      this.updateSubscription.unsubscribe();
    }
  }

  initMap(): void {
    // Check if real-time data has been fetched before initializing the map
    if (this.isRealTimeDataFetched) {
      // Only create the map if it doesn't exist yet
      if (!this.map) {
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: {
            lat: this.realTimeDriveStateData.latitude,
            lng: this.realTimeDriveStateData.longitude,
          },
          zoom: 20,
          mapTypeId: 'satellite',
        });
      }

      // Create or update the marker with the initial position
      if (!this.marker) {
        this.marker = new google.maps.Marker({
          map: this.map,
          position: {
            lat: this.realTimeDriveStateData.latitude,
            lng: this.realTimeDriveStateData.longitude,
          },
          title: 'LCE Tesla Model3',
        });
      } else {
        this.updateMapMarker(
          this.realTimeDriveStateData.latitude,
          this.realTimeDriveStateData.longitude
        );
      }
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
    this.teslaDriveStateService.getRealTimeData().subscribe({
      next: (data: any) => {
        this.realTimeDriveStateData = data;
        this.isRealTimeDataFetched = true; // Set the flag to true after fetching the real-time data
        console.log('Real-time data fetched:', data);
        // Convert the timestamp to a formatted date
        this.formattedTimestamp = this.formatTimestamp(
          this.realTimeDriveStateData.timestamp / 1000
        ); // Convert to seconds by dividing by 1000

        this.initMap(); // Call initMap() after fetching the real-time data
      },
      error: (error: any) => {
        console.error('Error fetching real-time data:', error);
      },
    });

    this.teslaClimateStateDataService.getRealTimeData().subscribe({
      next: (data: any) => {
        this.realTimeClimateStateData = data;
        this.isRealTimeDataFetched = true; // Set the flag to true after fetching the real-time data
        console.log('Real-time data fetched:', data);
        // Convert the timestamp to a formatted date
        this.formattedTimestamp = this.formatTimestamp(
          this.realTimeClimateStateData.timestamp / 1000
        ); // Convert to seconds by dividing by 1000

        this.initMap(); // Call initMap() after fetching the real-time data
      },
      error: (error: any) => {
        console.error('Error fetching real-time data:', error);
      },
    });

    this.teslaChargeStateService.getRealTimeData().subscribe({
      next: (data: any) => {
        this.realTimeChargeStateData = data;
        this.isRealTimeDataFetched = true; // Set the flag to true after fetching the real-time data
        console.log('Real-time data fetched:', data);
        // Convert the timestamp to a formatted date
        this.formattedTimestamp = this.formatTimestamp(
          this.realTimeChargeStateData.timestamp / 1000
        ); // Convert to seconds by dividing by 1000

        this.initMap(); // Call initMap() after fetching the real-time data
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

  updateMapMarker(latitude: number, longitude: number): void {
    // Update the marker position using the provided latitude and longitude
    if (this.marker) {
      this.marker.setPosition({ lat: latitude, lng: longitude });
      console.log('Marker position latitude: ' + latitude);
      console.log('Marker position longitude' + longitude);
    }
  }
}
