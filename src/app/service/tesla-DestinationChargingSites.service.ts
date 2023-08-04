import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaDestinationChargingSitesService {
  private apiUrl =
    'https://localhost:7147/TeslaNearCharges/destination-chargers?saveInDataBase=false';

  constructor(private http: HttpClient) {}

  getRealTimeData(): Observable<DestinationChargingSite[]> {
    return this.http.post<any>(this.apiUrl, null);
  }
}

export interface DestinationChargingSite {
  location: {
    latitude: number;
    longitude: number;
  };
  name: string;
  type: string;
  distanceMiles: number;
}