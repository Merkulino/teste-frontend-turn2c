import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileComponent } from "./profile.component";
import { DogsModule } from "src/app/components/dogs-grid/dogs.module";
import { AppMaterialModule } from "src/app/shared/material.module";

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    DogsModule,
    AppMaterialModule,
  ],
  exports: []
})
export class ProfileModule { }