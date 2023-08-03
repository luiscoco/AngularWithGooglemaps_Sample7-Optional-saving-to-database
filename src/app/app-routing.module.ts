import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargeStateComponent } from './components/charge-state/charge-state.component';
import { MapComponent } from './components/map/map.component';
import { DriveStateComponent } from './components/drive-state/drive-state.component';
import { VehicleStateComponent } from './components/vehicle-state/vehicle-state.component';
import { ClimateStateComponent } from './components/climate-state/climate-state.component';
import { LoginComponent } from './components/get-login-url/get-login-url.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'charge-state', component: ChargeStateComponent },
  { path: 'map-component', component: MapComponent },
  { path: 'drive-state', component: DriveStateComponent },
  { path: 'vehicle-state', component: VehicleStateComponent },
  { path: 'climate-state', component: ClimateStateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
