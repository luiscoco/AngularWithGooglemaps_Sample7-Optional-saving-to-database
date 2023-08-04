// tesla-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaDoorsLockService {
  private teslaCommandsUrl = 'https://localhost:7147/TeslaCommands/';

  constructor(private http: HttpClient) {}

  doorsLock(): Observable<any> {
    const endpoint = this.teslaCommandsUrl + 'doors-lock';
    return this.http.post(endpoint, {});
  }
}
