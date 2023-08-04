import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaChargingSitesService {
  private apiUrl =
    'https://localhost:7147/TeslaNearCharges/superchargers?saveInDataBase=false';

  constructor(private http: HttpClient) {}

  getRealTimeData(): Observable<ChargingSite[]> {
    return this.http.post<any>(this.apiUrl, null);
  }
}

export interface ChargingSite {
  availableStalls: number;
  totalStalls: number;
  siteClosed: boolean;
  location: {
    latitude: number;
    longitude: number;
  };
  name: string;
  type: string;
  distanceMiles: number;
}