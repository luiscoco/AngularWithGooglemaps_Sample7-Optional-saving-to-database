import { Component, OnInit } from '@angular/core';
import { TeslaLoginService } from '../../service/tesla-Login.service';
import { TeslaGetTokenService } from '../../service/tesla-GetToken.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <button (click)="getLoginUrl()">Go to TESLA Login</button>

    <div *ngIf="codeverifier">
      <h3>Code Verifier:</h3>
      <input type="text" [value]="codeverifier" readonly />
    </div>

    <div>
      <h3>Callback URL:</h3>
      <input type="text" [(ngModel)]="redirectUrl" />
    </div>

    <div *ngIf="codeverifier">
      <button (click)="getTokenAfterLogin()">Get Token after Login</button>
      <input type="text" [value]="accessToken" readonly />
    </div>
  `,
})
export class LoginComponent implements OnInit {
  loginUrl: string = '';
  codeverifier: string = '';
  redirectUrl: string = '';
  accessToken: string = '';
  codeValue: string = '';

  constructor(
    private teslaLoginService: TeslaLoginService,
    private teslaGetTokenService: TeslaGetTokenService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  extractCode(): void {
    const url = new URL(this.redirectUrl);
    const params = new URLSearchParams(url.search);
    this.codeValue = params.get('code') || '';
  }

  getLoginUrl() {
    this.teslaLoginService.getLoginUrl().subscribe(
      (data) => {
        this.loginUrl = data.login_url;
        this.codeverifier = data.codeVerifier;
        this.openLoginUrlInNewTab();
        this.copyCodeVerifier();
      },
      (error) => {
        console.error('Error fetching login URL:', error);
      }
    );
  }

  copyCodeVerifier() {
    if (this.codeverifier) {
      const inputElement = document.createElement('input');
      inputElement.value = this.codeverifier;
      document.body.appendChild(inputElement);
      inputElement.select();
      document.execCommand('copy');
      document.body.removeChild(inputElement);
      alert('Code Verifier copied to clipboard!');
    }
  }

  openLoginUrlInNewTab() {
    if (this.loginUrl) {
      window.open(this.loginUrl, '_blank');
    }
  }

  getTokenAfterLogin() {
    if (this.codeverifier && this.redirectUrl) {
      this.extractCode();
       console.log('Luis codeverifier' + this.codeverifier);
       console.log('Luis codeValue' + this.codeValue);
      this.teslaGetTokenService
        .exchangeCodeForBearerToken(this.codeverifier, this.codeValue)
        .subscribe(
          (data) => {
            this.accessToken = data.access_token;
          },
          (error) => {
            console.error('Error fetching access token:', error);
          }
        );
    }
  }
}
