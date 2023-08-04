// tesla-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaRemoteStartService {
  private teslaCommandsUrl = 'https://localhost:7147/TeslaCommands/';

  constructor(private http: HttpClient) {}

  remoteStart(): Observable<any> {
    const endpoint = this.teslaCommandsUrl + 'remote-start';
    return this.http.post(endpoint, {});
  }
}
