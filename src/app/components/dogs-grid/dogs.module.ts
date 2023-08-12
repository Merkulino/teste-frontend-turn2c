import { NgModule } from "@angular/core";
import { DogsGridComponent } from "./dogs-grid.component";
import { DogsCardComponent } from "./dogs-card/dogs-card.component";
import { CommonModule } from "@angular/common";
import { AppMaterialModule } from "src/app/shared/material.module";

@NgModule({
  declarations:[
    DogsGridComponent,
    DogsCardComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    DogsGridComponent,
    DogsCardComponent
  ]
})
export class DogsModule { }