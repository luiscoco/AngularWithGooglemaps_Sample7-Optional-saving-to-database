import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeslaChargeStateService } from '../service/tesla-ChargeState.service';
import { interval, Subscription } from 'rxjs';

declare const google: any;

@Component({
  selector: 'app-near-chargers',
  template: `
    <div>
      <h3>CHARGE CONDITIONS</h3>
      <p>
        Tesla_Battery_Heater_On:
        {{ realTimeChargeStateData.batteryHeaterOn }}
      </p>
      <p>
        Tesla_Battery_Level:
        {{ realTimeChargeStateData.batteryLevel }}
      </p>
      <p>
        Tesla_Battery_Range(km):
        {{ this.realTimeChargeStateData.batteryRange * 1.60934 }}
      </p>
      <p>
        Tesla_Charge_Amps:
        {{ realTimeChargeStateData.chargeAmps }}
      </p>
      <p>
        Tesla_Charge_Current_Request:
        {{ realTimeChargeStateData.chargeCurrentRequest }}
      </p>
      <p>
        Tesla_Charge_Current_Request_Max:
        {{ realTimeChargeStateData.chargeCurrentRequestMax }}
      </p>
      <p>
        Tesla_Charge_Enable_Request:
        {{ realTimeChargeStateData.chargeEnableRequest }}
      </p>
      <p>
        Tesla_Charge_Energy_Added:
        {{ realTimeChargeStateData.chargeEnergyAdded }}
      </p>
      <p>
        Tesla_Charge_Limit_State_Of_Charge:
        {{ realTimeChargeStateData.chargeLimitStateOfCharge }}
      </p>
      <p>
        Tesla_Charge_Limit_State_Of_Charge_Maximum:
        {{ realTimeChargeStateData.chartLimitStateOfChargeMaximum }}
      </p>
      <p>
        Tesla_Charge_Limit_State_Of_Charge_Minimum:
        {{ realTimeChargeStateData.chartLimitStateOfChargeMinimum }}
      </p>
      <p>
        Tesla_Charge_Limit_State_Of_Charge_Standard:
        {{ realTimeChargeStateData.chargeLimitStateOfChargeStandard }}
      </p>
      <p>
        Tesla_Charge_Miles_Added_Ideal(km):
        {{ this.realTimeChargeStateData.chargeMilesAddedIdeal * 1.60934 }}
      </p>
      <p>
        Tesla_Charge_Miles_Added_Rated(km):
        {{ this.realTimeChargeStateData.chargeMilesAddedRated * 1.60934 }}
      </p>
      <p>
        Tesla_Charge_Port_Cold_Weather_Mode:
        {{ this.realTimeChargeStateData.Tesla_Charge_Port_Cold_Weather_Mode }}
      </p>
      <p>
        Tesla_Charge_Port_Color:
        {{ this.realTimeChargeStateData.chargePortColor }}
      </p>
      <p>
        Tesla_Charge_Port_Door_Open:
        {{ this.realTimeChargeStateData.chargePortDoorOpen }}
      </p>
      <p>
        Tesla_Charge_Port_Latch:
        {{ this.realTimeChargeStateData.chargePortLatch }}
      </p>
      <p>
        Tesla_Charge_Rate:
        {{ this.realTimeChargeStateData.chargeRate }}
      </p>
      <p>
        Tesla_Charge_To_Max_Range:
        {{ this.realTimeChargeStateData.chargeToMaxRange }}
      </p>
      <p>
        Tesla_Charge_Actual_Current:
        {{ this.realTimeChargeStateData.chargerActualCurrent }}
      </p>
      <p>
        Tesla_Charger_Phases:
        {{ this.realTimeChargeStateData.chargerPhases }}
      </p>
      <p>
        Tesla_Charger_Pilot_Current:
        {{ this.realTimeChargeStateData.chargerPilotCurrent }}
      </p>
      <p>
        Tesla_Charger_Power:
        {{ this.realTimeChargeStateData.chargerPower }}
      </p>
      <p>
        Tesla_Charger_Voltage:
        {{ this.realTimeChargeStateData.chargerVoltage }}
      </p>
      <p>
        Tesla_Charger_State:
        {{ this.realTimeChargeStateData.chargingState }}
      </p>
      <p>
        Tesla_Conn_Charge_Cable:
        {{ this.realTimeChargeStateData.connChargeCable }}
      </p>
      <p>
        Tesla_Est_Battery_Range:
        {{ this.realTimeChargeStateData.estBatteryRange }}
      </p>
      <p>
        Tesla_Fast_Charger_Brand:
        {{ this.realTimeChargeStateData.fastChargerBrand }}
      </p>
      <p>
        Tesla_Fast_Charger_Present:
        {{ this.realTimeChargeStateData.fastChargerPresent }}
      </p>
      <p>
        Tesla_Fast_Charger_Type:
        {{ this.realTimeChargeStateData.fastChargerType }}
      </p>
      <p>
        Tesla_Ideal_Battery_Range(km):
        {{ this.realTimeChargeStateData.idealBatteryRange * 1.60934 }}
      </p>
      <p>
        Tesla_Managed_Charging_Active:
        {{ this.realTimeChargeStateData.managedChargingActive }}
      </p>
      <p>
        Tesla_Managed_Charging_Start_Time:
        {{ this.realTimeChargeStateData.managedChargingStartTime }}
      </p>
      <p>
        Tesla_Managed_Charging_User_Canceled:
        {{ this.realTimeChargeStateData.managedChargingUserCanceled }}
      </p>
      <p>
        Tesla_Max_Range_Charge_Counter:
        {{ this.realTimeChargeStateData.maxRangeChargeCounter }}
      </p>
      <p>
        Tesla_Minutes_To_Full_Charge:
        {{ this.realTimeChargeStateData.minutesToFullCharge }}
      </p>
      <p>
        Tesla_Not_Enough_Power_To_Heat:
        {{ this.realTimeChargeStateData.notEnoughPowerToHeat }}
      </p>
      <p>
        Tesla_Off_Peak_Charging_Enabled:
        {{ this.realTimeChargeStateData.offPeakChargingEnabled }}
      </p>
      <p>
        Tesla_Off_Peak_Charging_Times:
        {{ this.realTimeChargeStateData.offPeakChargingTimes }}
      </p>
      <p>
        Tesla_off_Peak_Hours_End_Time:
        {{ this.realTimeChargeStateData.offPeakHoursEndTime }}
      </p>
      <p>
        Tesla_Pre_conditioning_Enabled:
        {{ this.realTimeChargeStateData.preconditioningEnabled }}
      </p>
      <p>
        Tesla_Pre_conditioning_Times:
        {{ this.realTimeChargeStateData.preconditioningTimes }}
      </p>
      <p>
        Tesla_Scheduled_Charging_Mode:
        {{ this.realTimeChargeStateData.scheduledChargingMode }}
      </p>
      <p>
        Tesla_Scheduled_Charging_Pending:
        {{ this.realTimeChargeStateData.scheduledChargingPending }}
      </p>
      <p>
        Tesla_Scheduled_Charging_Start_Time:
        {{ this.realTimeChargeStateData.scheduledChargingStartTime }}
      </p>
      <p>
        Tesla_Scheduled_Charging_Start_Time_App:
        {{ this.realTimeChargeStateData.scheduledChargingStartTimeApp }}
      </p>
      <p>
        Tesla_Scheduled_Departure_Time:
        {{ this.realTimeChargeStateData.scheduledDepartureTime }}
      </p>
      <p>
        Tesla_Scheduled_Departure_Time_Minutes:
        {{ this.realTimeChargeStateData.scheduledDepartureTimeMinutes }}
      </p>
      <p>
        Tesla_Super_Charger_Session_Trip_Planner:
        {{ this.realTimeChargeStateData.superchargerSessionTripPlanner }}
      </p>
      <p>
        Tesla_Time_To_Full_Charge:
        {{ this.realTimeChargeStateData.timeToFullCharge }}
      </p>
      <p>
        Tesla_Trip_Charging:
        {{ this.realTimeChargeStateData.tripCharging }}
      </p>
      <p>
        Tesla_Usable_Battery_Level:
        {{ this.realTimeChargeStateData.usableBatteryLevel }}
      </p>
      <p>
        Tesla_User_Charge_Enable_Request:
        {{ this.realTimeChargeStateData.userChargeEnableRequest }}
      </p>
      <p>
        Tesla_Iimestamp:
        {{ this.realTimeChargeStateData.timestamp }}
      </p>
      <p>Timestamp: {{ formattedTimestamp }}</p>
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
export class NearChargersComponent implements OnInit, OnDestroy {
  realTimeDriveStateData: any;
  realTimeClimateStateData: any;
  realTimeChargeStateData: any;
  isRealTimeDataFetched = false;
  map: any;
  marker: any;
  updateSubscription: Subscription | undefined; // Initialize the property as undefined
  formattedTimestamp!: string; // Property to store the formatted timestamp
  constructor(private teslaChargeStateService: TeslaChargeStateService) {}

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
    this.teslaChargeStateService.getRealTimeData().subscribe({
      next: (data: any) => {
        this.realTimeChargeStateData = data;
        this.isRealTimeDataFetched = true; // Set the flag to true after fetching the real-time data
        console.log('Real-time data fetched:', data);
        // Convert the timestamp to a formatted date
        this.formattedTimestamp = this.formatTimestamp(
          this.realTimeChargeStateData.timestamp / 1000
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
