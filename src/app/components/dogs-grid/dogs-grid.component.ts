import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DogResponse } from 'src/app/models/Dog';

@Component({
  selector: 'app-dogs-grid',
  templateUrl: './dogs-grid.component.html',
  styleUrls: ['./dogs-grid.component.css']
})
export class DogsGridComponent {

  @Input() dogs$: Observable<DogResponse[]> | undefined;

  getDogs() {
    return this.dogs$;
  }

}
