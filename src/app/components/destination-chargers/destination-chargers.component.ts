import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  DestinationChargingSite,
  TeslaDestinationChargingSitesService,
} from '../../service/tesla-DestinationChargingSites.service';
import { interval, Subscription } from 'rxjs';

declare const google: any;

@Component({
  selector: 'app-supercharger',
  template: `
    <h3>SUPERCHARGING SITES</h3>
    <ng-container *ngIf="isRealTimeDataFetched">
      <div *ngFor="let site of realTimeDestinationChargingSitesData">
        <p>
          <strong>Name:</strong> {{ site.name }} <br />
          <strong>Location:</strong> Latitude: {{ site.location.latitude }},
          Longitude: {{ site.location.longitude }} <br />
          <strong>Type:</strong> {{ site.type }} <br />
          <strong>Distance (Miles):</strong> {{ site.distanceMiles }}
        </p>
      </div>
    </ng-container>
  `,
  styles: [],
})
export class DestinationChargersComponent implements OnInit, OnDestroy {
  realTimeDestinationChargingSitesData: DestinationChargingSite[] = []; // Initialize as an empty array
  isRealTimeDataFetched = false;
  map: any;
  marker: any;
  updateSubscription: Subscription | undefined;
  formattedTimestamp!: string;

  constructor(
    private teslaDestinationChargingSitesService: TeslaDestinationChargingSitesService
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
    this.updateSubscription = interval(6500).subscribe(() => {
      this.fetchRealTimeData();
    });
  }

  fetchRealTimeData(): void {
    this.teslaDestinationChargingSitesService.getRealTimeData().subscribe({
      next: (data: DestinationChargingSite[]) => {
        // Update the type to ChargingSite[]
        this.realTimeDestinationChargingSitesData = data;
        this.isRealTimeDataFetched = true;
        console.log('Real-time data fetched:', data);
      },
      error: (error: any) => {
        console.error('Error fetching real-time data:', error);
      },
    });
  }
}
