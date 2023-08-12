import { Component, Input } from '@angular/core';
import { DogResponse } from 'src/app/models/Dog';

type dogsInfo = {
  name: string,
  url: string,
  lifeSpan: string
} 

@Component({
  selector: 'app-dogs-card',
  templateUrl: './dogs-card.component.html',
  styleUrls: ['./dogs-card.component.css']
})
export class DogsCardComponent {

  @Input() dogsInfo: dogsInfo | undefined;

}
