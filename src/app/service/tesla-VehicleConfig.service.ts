import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaVehicleConfigService {
  private apiUrl =
    'https://localhost:7147/TeslaVehicleData/vehicle-config?saveInDataBase=false';

  constructor(private http: HttpClient) {}

  getRealTimeData(): Observable<any> {
    return this.http.post<any>(this.apiUrl, null);
  }
}
