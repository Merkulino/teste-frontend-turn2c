import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './shared/material.module';
import { HomeModule } from './containers/home/home.module';
import { ProfileModule } from './containers/profile/profile.module';
import { HttpClientModule } from '@angular/common/http';
import { DogsAPIService } from './service/dogs-api.service';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppMaterialModule,
    HomeModule,
    ProfileModule,
    BrowserAnimationsModule
  ],
  providers: [DogsAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
