import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dogs-grid',
  templateUrl: './dogs-grid.component.html',
  styleUrls: ['./dogs-grid.component.css']
})
export class DogsGridComponent {

  @Input() dogs: string[] = [];

  getDogs() {
    return this.dogs;
  }

}
