import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeslaClimateStateDataService } from '../../service/tesla-ClimateState.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'climate-state',
  template: `
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
  `,
  styles: [
    `
      #map {
        height: 100%;
      }
    `,
  ],
})
export class ClimateStateComponent implements OnInit, OnDestroy {
  realTimeDriveStateData: any;
  realTimeClimateStateData: any;
  isRealTimeDataFetched = false;
  map: any;
  marker: any;
  updateSubscription: Subscription | undefined; // Initialize the property as undefined
  formattedTimestamp!: string; // Property to store the formatted timestamp
  constructor(
    private teslaClimateStateDataService: TeslaClimateStateDataService
  ) {}

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
    this.teslaClimateStateDataService.getRealTimeData().subscribe({
      next: (data: any) => {
        this.realTimeClimateStateData = data;
        this.isRealTimeDataFetched = true; // Set the flag to true after fetching the real-time data
        console.log('Real-time data fetched:', data);
        // Convert the timestamp to a formatted date
        this.formattedTimestamp = this.formatTimestamp(
          this.realTimeClimateStateData.timestamp / 1000
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

  updateMapMarker(latitude: number, longitude: number): void {
    // Update the marker position using the provided latitude and longitude
    if (this.marker) {
      this.marker.setPosition({ lat: latitude, lng: longitude });
      console.log('Marker position latitude: ' + latitude);
      console.log('Marker position longitude' + longitude);
    }
  }
}
