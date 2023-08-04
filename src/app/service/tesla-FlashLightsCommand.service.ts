// tesla-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaFlashLightsService {
  private teslaCommandsUrl = 'https://localhost:7147/TeslaCommands/';

  constructor(private http: HttpClient) {}

  flashLights(): Observable<any> {
    const endpoint = this.teslaCommandsUrl + 'flash-lights';
    return this.http.post(endpoint, {});
  }
}
