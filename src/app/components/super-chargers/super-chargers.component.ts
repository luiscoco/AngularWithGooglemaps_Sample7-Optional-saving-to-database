import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  SuperChargingSite,
  TeslaSuperChargingSitesService,
} from '../../service/tesla-SuperChargingSites.service';
import { interval, Subscription } from 'rxjs';

declare const google: any;

@Component({
  selector: 'app-supercharger',
  template: `
    <h3>SUPERCHARGING SITES</h3>
    <ng-container *ngIf="isRealTimeDataFetched">
      <div *ngFor="let site of realTimeSuperChargingSitesData">
        <p>
          <strong>Name:</strong> {{ site.name }} <br />
          <strong>Available Stalls:</strong> {{ site.availableStalls }} <br />
          <strong>Total Stalls:</strong> {{ site.totalStalls }} <br />
          <strong>Site Closed:</strong> {{ site.siteClosed }} <br />
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
export class SuperChargersComponent implements OnInit, OnDestroy {
  realTimeSuperChargingSitesData: SuperChargingSite[] = []; // Initialize as an empty array
  isRealTimeDataFetched = false;
  map: any;
  marker: any;
  updateSubscription: Subscription | undefined;
  formattedTimestamp!: string;

  constructor(
    private teslaSuperChargingSitesService: TeslaSuperChargingSitesService
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
    this.teslaSuperChargingSitesService.getRealTimeData().subscribe({
      next: (data: SuperChargingSite[]) => {
        // Update the type to ChargingSite[]
        this.realTimeSuperChargingSitesData = data;
        this.isRealTimeDataFetched = true;
        console.log('Real-time data fetched:', data);
      },
      error: (error: any) => {
        console.error('Error fetching real-time data:', error);
      },
    });
  }
}
