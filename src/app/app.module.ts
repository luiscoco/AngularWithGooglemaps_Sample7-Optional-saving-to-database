import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // Add this line
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { VehicleStateComponent } from './components/vehicle-state/vehicle-state.component';
import { VehicleDataComponent } from './components/vehicle-data/vehicle-data.component';
import { VehicleConfigComponent } from './components/vehicle-config/vehicle-config.component';
import { GuiSettingsComponent } from './components/gui-settings/gui-settings.component';
import { SuperChargersComponent } from './components/super-chargers/super-chargers.component';
import { DestinationChargersComponent } from './components/destination-chargers/destination-chargers.component';
import { GetLoginUrlComponent } from './components/get-login-url/get-login-url.component';
import { GetTokenAfterLoginComponent } from './components/get-token-after-login/get-token-after-login.component';
import { ChargingCommandsComponent } from './components/charging-commands/charging-commands.component';
import { MediaCommandsComponent } from './components/media-commands/media-commands.component';
import { ClimateCommandsComponent } from './components/climate-commands/climate-commands.component';
import { ChargeStateComponent } from './components/charge-state/charge-state.component';
import { DriveStateComponent } from './components/drive-state/drive-state.component';
import { ClimateStateComponent } from './components/climate-state/climate-state.component';

import { TeslaChargeStateService } from '../app/service/tesla-ChargeState.service';
import { TeslaChargingSitesService } from '../app/service/tesla-ChargingSites.service';
import { TeslaClimateStateDataService } from '../app/service/tesla-ClimateState.service';
import { TeslaDriveStateService } from '../app/service/tesla-DriveState.service';
import { TeslaVehicleStateService } from '../app/service/tesla-VehicleState.service';
import { TeslaLoginService } from '../app/service/tesla-Login.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    VehicleStateComponent,
    VehicleDataComponent,
    VehicleConfigComponent,
    GuiSettingsComponent,
    SuperChargersComponent,
    DestinationChargersComponent,
    GetLoginUrlComponent,
    GetTokenAfterLoginComponent,
    ChargingCommandsComponent,
    MediaCommandsComponent,
    ClimateCommandsComponent,
    ChargeStateComponent,
    DriveStateComponent,
    ClimateStateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule, // Add this line
  ],
  providers: [
    TeslaChargeStateService,
    TeslaChargingSitesService,
    TeslaClimateStateDataService,
    TeslaDriveStateService,
    TeslaVehicleStateService,
    TeslaLoginService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
