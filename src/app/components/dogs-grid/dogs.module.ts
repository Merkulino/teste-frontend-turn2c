import { NgModule } from "@angular/core";
import { DogsGridComponent } from "./dogs-grid.component";
import { DogsCardComponent } from "./dogs-card/dogs-card.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations:[
    DogsGridComponent,
    DogsCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DogsGridComponent,
    DogsCardComponent
  ]
})
export class DogsModule { }