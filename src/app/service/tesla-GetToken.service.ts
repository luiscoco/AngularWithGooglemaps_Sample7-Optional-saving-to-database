import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeslaGetTokenService {
  private apiUrl = 'https://localhost:7147/TeslaLoginURL/get-token-after-login';
  private readonly authUrl = 'https://auth.tesla.com/oauth2/v3/token';
  private readonly clientId = 'ownerapi';
  private readonly redirectUri = 'https://auth.tesla.com/void/callback';

  constructor(private http: HttpClient) {}

  exchangeCodeForBearerToken(
    codeVerifier: string,
    code: string
  ): Observable<Tokens> {
    const body = {
      grant_type: 'authorization_code',
      client_id: this.clientId,
      code: code,
      code_verifier: codeVerifier,
      redirect_uri: this.redirectUri,
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<Tokens>(this.authUrl, JSON.stringify(body), {
      headers,
    });
  }
}

interface Tokens {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  created_at: number;
}
