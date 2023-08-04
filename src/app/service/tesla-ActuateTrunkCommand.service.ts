import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaActuateTrunkService {
  private teslaCommandsUrl = 'https://localhost:7147/TeslaCommands/';

  constructor(private http: HttpClient) {}

  actuateTrunk(which_trunk: string): Observable<any> {
    const endpoint = this.teslaCommandsUrl + 'actuate-trunk';
    const requestBody = {
      which_trunk: which_trunk,
    };

    return this.http.post(endpoint, requestBody);
  }
}
