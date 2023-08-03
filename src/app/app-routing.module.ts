import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChargeStateComponent } from './components/charge-state/charge-state.component';
import { MapComponent } from './components/map/map.component';
import { VehicleStateComponent } from './components/vehicle-state/vehicle-state.component';

const routes: Routes = [
  { path: 'charge-state', component: ChargeStateComponent },
  { path: 'map-component', component: MapComponent },
  { path: 'vehicle-state', component: VehicleStateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
