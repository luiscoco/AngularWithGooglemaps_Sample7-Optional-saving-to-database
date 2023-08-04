import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaGUISettingsService {
  private apiUrl =
    'https://localhost:7147/TeslaVehicleData/gui-settings?saveInDataBase=false';

  constructor(private http: HttpClient) {}

  getRealTimeData(): Observable<any> {
    return this.http.post<any>(this.apiUrl, null);
  }
}
