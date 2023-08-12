import { Component } from '@angular/core';
import { DogsAPIService } from 'src/app/service/dogs-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  dogs = ['dag', 'dog', 'lildog'];

  constructor(private service: DogsAPIService) { 
    service.getDogs().subscribe(v => console.log());
  }

}
