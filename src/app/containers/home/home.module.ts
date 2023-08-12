import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { DogsModule } from "src/app/components/dogs-grid/dogs.module";
import { DogsAPIService } from "src/app/service/dogs-api.service";

@NgModule({
  declarations:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    DogsModule
  ],
  exports: [],
  providers: [
    DogsAPIService
  ]
})
export class HomeModule { }