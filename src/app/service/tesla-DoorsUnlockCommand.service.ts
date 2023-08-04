// tesla-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaDoorsUnlockService {
  private teslaCommandsUrl = 'https://localhost:7147/TeslaCommands/';

  constructor(private http: HttpClient) {}

  doorsUnlock(): Observable<any> {
    const endpoint = this.teslaCommandsUrl + 'doors-unlock';
    return this.http.post(endpoint, {});
  }
}
