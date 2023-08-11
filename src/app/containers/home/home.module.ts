import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { DogsModule } from "src/app/components/dogs-grid/dogs.module";

@NgModule({
  declarations:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    DogsModule
  ],
  exports: []
})
export class HomeModule { }