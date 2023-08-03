import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaGetTokenService {
  private apiUrl = 'https://localhost:7147/TeslaLoginURL/get-token-after-login';

  constructor(private http: HttpClient) {}

  getTokenAfterLogin(codeVerifier: string, redirectUrl: string): Observable<any> {
    const body = {
      codeverifier: codeVerifier,
      redirectUrl: redirectUrl,
    };

    // Set the headers for the POST request
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl, body, { headers });
  }
}
