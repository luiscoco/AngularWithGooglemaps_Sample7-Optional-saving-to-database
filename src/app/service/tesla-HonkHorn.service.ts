// tesla-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaHonkHornService {
  private teslaCommandsUrl = 'https://localhost:7147/TeslaCommands/';

  constructor(private http: HttpClient) {}

  honkHorn(): Observable<any> {
    const endpoint = this.teslaCommandsUrl + 'honk-horn';
    return this.http.post(endpoint, {});
  }
}
