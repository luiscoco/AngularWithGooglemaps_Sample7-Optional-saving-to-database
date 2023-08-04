import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeslaVehicleConfigService } from '../../service/tesla-VehicleConfig.service';
import { interval, Subscription } from 'rxjs';

declare const google: any;

@Component({
  selector: 'vehicle-config',
  template: `
    <h3>VEHICLE CONFIG</h3>
    <p>
      Auxiliaryp_Park_Lamps: {{ realTimeVehicleConfigData.auxiliaryParkLamps }}
    </p>
    <p>Badge_Version: {{ realTimeVehicleConfigData.badgeVersion }}</p>
    <p>
      Can_Accept_Navigation_Requests:
      {{ realTimeVehicleConfigData.canAcceptNavigationRequests }}
    </p>
    <p>
      Can_Actuate_Trunks:
      {{ realTimeVehicleConfigData.canActuateTrunks }}
    </p>
    <p>
      Car_Special_Type:
      {{ realTimeVehicleConfigData.carSpecialType }}
    </p>
    <p>
      Car_Type:
      {{ realTimeVehicleConfigData.carType }}
    </p>
    <p>
      Charge_Port_Type:
      {{ realTimeVehicleConfigData.chargePortType }}
    </p>
    <p>
      Cabin_Overheat_Protection_User_Set_Temperature_Supported:
      {{
        realTimeVehicleConfigData.cabinOverheatProtectionUserSetTemperatureSupported
      }}
    </p>
    <p>
      Dashcam_Clip_Save_Supported:
      {{ realTimeVehicleConfigData.dashcamClipSaveSupported }}
    </p>
    <p>
      Default_Charge_To_Max:
      {{ realTimeVehicleConfigData.defaultChargeToMax }}
    </p>
    <p>
      Driver_Assist:
      {{ realTimeVehicleConfigData.driverAssist }}
    </p>
    <p>
      ece_Restrictions:
      {{ realTimeVehicleConfigData.eceRestrictions }}
    </p>
    <p>
      Efficiency_Package:
      {{ realTimeVehicleConfigData.efficiencyPackage }}
    </p>
    <p>
      European_Union_Vehicle:
      {{ realTimeVehicleConfigData.europeanUnionVehicle }}
    </p>
    <p>
      Exterior_Color:
      {{ realTimeVehicleConfigData.exteriorColor }}
    </p>
    <p>
      Exterior_Trim:
      {{ realTimeVehicleConfigData.exteriorTrim }}
    </p>
    <p>
      Exterior_Trim_Override:
      {{ realTimeVehicleConfigData.exteriorTrimOverride }}
    </p>
    <p>
      has_Air_Suspension:
      {{ realTimeVehicleConfigData.hasAirSuspension }}
    </p>
    <p>
      has_Ludicrous_Mode:
      {{ realTimeVehicleConfigData.hasLudicrousMode }}
    </p>
    <p>
      has_Seat_Cooling:
      {{ realTimeVehicleConfigData.hasSeatCooling }}
    </p>
    <p>
      headlamp_Type:
      {{ realTimeVehicleConfigData.headlampType }}
    </p>
    <p>
      interior_Trim_Type:
      {{ realTimeVehicleConfigData.interiorTrimType }}
    </p>
    <p>
      key_Version:
      {{ realTimeVehicleConfigData.keyVersion }}
    </p>
    <p>
      motorized_ChargePort:
      {{ realTimeVehicleConfigData.motorizedChargePort }}
    </p>
    <p>
      paint_Color_Override:
      {{ realTimeVehicleConfigData.paintColorOverride }}
    </p>
    <p>
      performance_Package:
      {{ realTimeVehicleConfigData.performancePackage }}
    </p>
    <p>
      power_Lift_Gate:
      {{ realTimeVehicleConfigData.powerLiftGate }}
    </p>
    <p>
      pedestrian_Warning_System:
      {{ realTimeVehicleConfigData.pedestrianWarningSystem }}
    </p>
    <p>
      rear_Drive_Unit:
      {{ realTimeVehicleConfigData.rearDriveUnit }}
    </p>
    <p>
      rear_Seat_Heaters:
      {{ realTimeVehicleConfigData.rearSeatHeaters }}
    </p>
    <p>
      rear_Seat_Type:
      {{ realTimeVehicleConfigData.rearSeatType }}
    </p>
    <p>
      right_Hand_Drive:
      {{ realTimeVehicleConfigData.rightHandDrive }}
    </p>
    <p>
      roof_Color:
      {{ realTimeVehicleConfigData.roofColor }}
    </p>
    <p>
      seat_Type:
      {{ realTimeVehicleConfigData.seatType }}
    </p>
    <p>
      spoiler_Type:
      {{ realTimeVehicleConfigData.spoilerType }}
    </p>
    <p>
      sunroof_Installed:
      {{ realTimeVehicleConfigData.sunroofInstalled }}
    </p>
    <p>
      supports_QR_Paring:
      {{ realTimeVehicleConfigData.supportsQRParing }}
    </p>
    <p>
      third_Row_Seats:
      {{ realTimeVehicleConfigData.thirdRowSeats }}
    </p>
    <p>
      timestamp:
      {{ realTimeVehicleConfigData.timestamp }}
    </p>
    <p>
      trim_Badging:
      {{ realTimeVehicleConfigData.trimBadging }}
    </p>
    <p>
      use_Range_Badging:
      {{ realTimeVehicleConfigData.useRangeBadging }}
    </p>
    <p>
      utc_Offset:
      {{ realTimeVehicleConfigData.utcOffset }}
    </p>
    <p>
      webcam_Selfie_Supported:
      {{ realTimeVehicleConfigData.webcamSelfieSupported }}
    </p>
    <p>
      webcam_Supported:
      {{ realTimeVehicleConfigData.webcamSupported }}
    </p>
    <p>
      wheel_Type:
      {{ realTimeVehicleConfigData.wheelType }}
    </p>
  `,
  styles: [],
})
export class VehicleConfigComponent implements OnInit, OnDestroy {
  realTimeVehicleConfigData: any;
  isRealTimeDataFetched = false;
  map: any;
  marker: any;
  updateSubscription: Subscription | undefined; // Initialize the property as undefined
  formattedTimestamp!: string; // Property to store the formatted timestamp
  constructor(private teslaVehicleConfigService: TeslaVehicleConfigService) {}

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
    this.teslaVehicleConfigService.getRealTimeData().subscribe({
      next: (data: any) => {
        this.realTimeVehicleConfigData = data;
        this.isRealTimeDataFetched = true; // Set the flag to true after fetching the real-time data
        console.log('Real-time data fetched:', data);
        // Convert the timestamp to a formatted date
        this.formattedTimestamp = this.formatTimestamp(
          this.realTimeVehicleConfigData.timestamp / 1000
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
