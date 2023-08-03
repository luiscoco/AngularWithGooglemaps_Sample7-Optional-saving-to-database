import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaGetTokenService {
  private apiUrl = 'https://localhost:7147/TeslaLoginURL/get-token-after-login';

  constructor(private http: HttpClient) {}

  getTokenAfterLogin(
    codeVerifier: string,
    redirectUrl: string
  ): Observable<any> {
    // Set the headers for the POST request
    const headers = new HttpHeaders({
      accept: '*/*',
    });

    // Create the URL with query parameters
    const url = `${this.apiUrl}?codeverifier=${encodeURIComponent(
      codeVerifier
    )}&redirectUrl=${encodeURIComponent(redirectUrl)}`;

    // Make the HTTP POST request with an empty request body
    return this.http.post<any>(url, {}, { headers });
  }
}
