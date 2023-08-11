import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { ProfileComponent } from './containers/profile/profile.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "perfil", component: ProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
