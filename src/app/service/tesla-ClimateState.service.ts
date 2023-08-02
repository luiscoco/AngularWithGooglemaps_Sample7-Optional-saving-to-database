import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaClimateStateDataService {
  private apiUrl =
    'https://localhost:7147/TeslaVehicleData/climate-state?saveInDataBase=false';

  constructor(private http: HttpClient) {}

  getRealTimeData(): Observable<any> {
    return this.http.post<any>(this.apiUrl, null);
  }
}
