// tesla-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaTriggerHomeLinkService {
  private teslaCommandsUrl = 'https://localhost:7147/TeslaCommands/';

  constructor(private http: HttpClient) {}

  triggerHomeLink(): Observable<any> {
    const endpoint = this.teslaCommandsUrl + 'trigger-homelink';
    return this.http.post(endpoint, {});
  }
}
