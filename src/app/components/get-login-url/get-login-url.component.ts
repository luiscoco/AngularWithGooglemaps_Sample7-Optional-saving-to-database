import { Component, OnInit } from '@angular/core';
import { TeslaLoginService } from '../../service/tesla-Login.service';
import { TeslaGetTokenService } from '../../service/tesla-GetToken.service';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <p>
        Press the "Go to TESLA Login" and after entering your "username" and
        "password" copy the "Callback URL" in the input box below
      </p>
    </div>
    <button (click)="getLoginUrl()">Go to TESLA Login page</button>

    <div style="display: flex; align-items: center;">
      <p style="margin-right: 10px;">Callback URL:</p>
      <input type="text" [(ngModel)]="redirectUrl" style="width: 750px;" />
    </div>

    <div *ngIf="codeverifier">
      <button (click)="getTokenAfterLogin()">Get Token after Login</button>
      <input
        type="text"
        [value]="accessToken"
        readonly
        style="width: 750px;"
      />
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
