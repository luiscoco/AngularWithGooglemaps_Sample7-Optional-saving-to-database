import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeslaDriveStateService } from '../../service/tesla-DriveState.service';
import { interval, Subscription } from 'rxjs';

declare const google: any;

@Component({
  selector: 'drive-state',
  template: `
      <h3>DRIVE STATE</h3>
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
  `,
  styles: [
    `
      #map {
        height: 100%;
      }
    `,
  ],
})
export class DriveStateComponent implements OnInit, OnDestroy {
  realTimeDriveStateData: any;
  isRealTimeDataFetched = false;
  map: any;
  marker: any;
  updateSubscription: Subscription | undefined; // Initialize the property as undefined
  formattedTimestamp!: string; // Property to store the formatted timestamp
  constructor(
    private teslaDriveStateService: TeslaDriveStateService
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
    this.teslaDriveStateService.getRealTimeData().subscribe({
      next: (data: any) => {
        this.realTimeDriveStateData = data;
        this.isRealTimeDataFetched = true; // Set the flag to true after fetching the real-time data
        console.log('Real-time data fetched:', data);
        // Convert the timestamp to a formatted date
        this.formattedTimestamp = this.formatTimestamp(
          this.realTimeDriveStateData.timestamp / 1000
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
