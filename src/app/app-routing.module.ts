import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NearChargersComponent } from './components/near-chargers/near-chargers.component';
import { MapComponent } from './components/map/map.component';

const routes: Routes = [
  { path: 'near-chargers', component: NearChargersComponent },
  { path: 'map-component', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
