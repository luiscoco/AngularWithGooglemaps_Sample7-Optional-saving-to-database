import { Component, OnInit } from '@angular/core';
import { TeslaLoginService } from '../../service/tesla-Login.service';

@Component({
  selector: 'app-login',
  template: `
    <button (click)="getLoginUrl()">Get Login URL</button>
    <p *ngIf="loginUrl">Login URL: {{ loginUrl }}</p>
  `,
})
export class LoginComponent implements OnInit {
  loginUrl!: string;

  constructor(private teslaLoginService: TeslaLoginService) {}

  ngOnInit() {}

  getLoginUrl() {
    this.teslaLoginService.getLoginUrl().subscribe(
      (data) => {
        this.loginUrl = data.login_url; // Assuming the response from the API contains a property "url" with the login URL.
      },
      (error) => {
        console.error('Error fetching login URL:', error);
      }
    );
  }
}
