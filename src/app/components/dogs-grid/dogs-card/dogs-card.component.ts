import { Component, Input } from '@angular/core';

type dogsInfo = {
  name: string | null,
  url: string,
  lifeSpan: string | null
} 

@Component({
  selector: 'app-dogs-card',
  templateUrl: './dogs-card.component.html',
  styleUrls: ['./dogs-card.component.css']
})
export class DogsCardComponent {

  @Input() dogsInfo: dogsInfo | undefined;

}
