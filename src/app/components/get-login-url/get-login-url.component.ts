import { Component, OnInit } from '@angular/core';
import { TeslaLoginService } from '../../service/tesla-Login.service';
import { TeslaGetTokenService } from '../../service/tesla-GetToken.service';

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

  constructor(
    private teslaLoginService: TeslaLoginService,
    private teslaGetTokenService: TeslaGetTokenService
  ) {}

  ngOnInit() {}

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
    console.log('Luis CodeVerifier' + this.codeverifier);
    console.log('Luis CodeVerifier' + this.redirectUrl);
    if (this.codeverifier && this.redirectUrl) {
      this.teslaGetTokenService
        .getTokenAfterLogin(this.codeverifier, this.redirectUrl)
        .subscribe(
          (data) => {
            this.accessToken = data.accessToken;
          },
          (error) => {
            console.error('Error fetching access token:', error);
          }
        );
    }
  }
}
