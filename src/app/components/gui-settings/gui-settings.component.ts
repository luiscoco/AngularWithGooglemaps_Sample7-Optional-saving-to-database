import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeslaGUISettingsService } from '../../service/tesla-GUISettings.service copy';
import { interval, Subscription } from 'rxjs';

declare const google: any;

@Component({
  selector: 'gui-settings',
  template: `
    <h3>GUI Settings</h3>
    <p>GUI_24HourTime: {{ realTimeGUISettingsData.guI24HourTime }}</p>
    <p>
      GUI_Charge_Rate_Units: {{ realTimeGUISettingsData.guiChargeRateUnits }}
    </p>
    <p>GUI_Distance_Units: {{ realTimeGUISettingsData.guiDistanceUnits }}</p>
    <p>GUI_Range_Display: {{ realTimeGUISettingsData.guiRangeDisplay }}</p>
    <p>
      GUI_Temperature_Units: {{ realTimeGUISettingsData.guiTemperatureUnits }}
    </p>
    <p>
      GUI_Pressure_Units: {{ realTimeGUISettingsData.guiTirePressureUnits }}
    </p>
    <p>GUI_Show_Range_Units: {{ realTimeGUISettingsData.showRangeUnits }}</p>
    <p>timestamp: {{ realTimeGUISettingsData.timestamp }}</p>
  `,
  styles: [],
})
export class GuiSettingsComponent implements OnInit, OnDestroy {
  realTimeGUISettingsData: any;
  isRealTimeDataFetched = false;
  map: any;
  marker: any;
  updateSubscription: Subscription | undefined; // Initialize the property as undefined
  formattedTimestamp!: string; // Property to store the formatted timestamp
  constructor(private teslaGUISettingsService: TeslaGUISettingsService) {}

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
    this.teslaGUISettingsService.getRealTimeData().subscribe({
      next: (data: any) => {
        this.realTimeGUISettingsData = data;
        this.isRealTimeDataFetched = true; // Set the flag to true after fetching the real-time data
        console.log('Real-time data fetched:', data);
        // Convert the timestamp to a formatted date
        this.formattedTimestamp = this.formatTimestamp(
          this.realTimeGUISettingsData.timestamp / 1000
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
