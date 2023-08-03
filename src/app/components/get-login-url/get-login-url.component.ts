import { Component, OnInit } from '@angular/core';
import { TeslaLoginService } from '../../service/tesla-Login.service';

@Component({
  selector: 'app-login',
  template: `
    <button (click)="getLoginUrl()">Get Login URL</button>
    <p *ngIf="loginUrl">Login URL: {{ loginUrl }}</p>
    <p>Code Verifier: {{ codeVerifier }}</p>
  `,
})
export class LoginComponent implements OnInit {
  loginUrl!: string;
  codeVerifier!: string;

  constructor(private teslaLoginService: TeslaLoginService) {}

  ngOnInit() {}

  getLoginUrl() {
    this.teslaLoginService.getLoginUrl().subscribe(
      (data) => {
        this.loginUrl = data.login_url; // Assuming the response from the API contains a property "login_url" with the login URL.
        this.codeVerifier = data.codeVerifier; // Assuming the response from the API contains a property "codeVerifier" with the code verifier.
        this.openLoginUrlInNewTab(); // Redirect to the login URL in a new tab after obtaining it from the service.
      },
      (error) => {
        console.error('Error fetching login URL:', error);
      }
    );
  }

  openLoginUrlInNewTab() {
    // Check if the login URL is available
    if (this.loginUrl) {
      // Open the login URL in a new tab
      window.open(this.loginUrl, '_blank');
    }
  }
}
