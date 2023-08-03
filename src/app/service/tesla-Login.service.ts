import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaLoginService {
  private apiUrl = 'https://localhost:7147/TeslaLoginURL/get-login-url';

  constructor(private http: HttpClient) {}

  getLoginUrl(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
