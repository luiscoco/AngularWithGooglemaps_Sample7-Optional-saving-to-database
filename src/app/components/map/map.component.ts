import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeslaDriveStateService } from '../../service/tesla-DriveState.service';
import { interval, Subscription } from 'rxjs';

declare const google: any;

@Component({
  selector: 'app-map',
  template: `
    <div id="map" style="width: 100%; height: 400px;"></div>
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
  isRealTimeDataFetched = false;
  map: any;
  marker: any;
  updateSubscription: Subscription | undefined; // Initialize the property as undefined
  formattedTimestamp!: string; // Property to store the formatted timestamp
  constructor(
    private teslaDriveStateService: TeslaDriveStateService
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
