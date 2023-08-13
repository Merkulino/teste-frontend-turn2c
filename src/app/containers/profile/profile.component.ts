import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DogResponse } from 'src/app/models/Dog';
import { DogsAPIService } from 'src/app/service/dogs-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  userDogs$!: Observable<DogResponse[]>;

  constructor(private service: DogsAPIService) {
    this.userDogs$ = service.getDogsFromUser();
    this.userDogs$.subscribe(v => console.log(v[0].breeds));
  }

  uploadPhoto() {
    throw new Error('Method not implemented.');
  }
}
