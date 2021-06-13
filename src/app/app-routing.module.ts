import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DistrictComponent } from './district/district.component';
import { LatlongComponent } from './latlong/latlong.component';
import { PinComponent } from './pin/pin.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'district',component:DistrictComponent},
  {path:'pin',component:PinComponent},
  {path:'latlong',component:LatlongComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
