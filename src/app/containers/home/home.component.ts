import { Component } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { DogResponse } from 'src/app/models/Dog';
import { DogsAPIService } from 'src/app/service/dogs-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  dogs$: Observable<DogResponse[]> | undefined;

  constructor(private service: DogsAPIService) {
    this.dogs$ = service.getDogs().pipe(
      catchError(error => {
        console.log('erro ao salvar cursos' + error);
        alert('Erro ao salvar cursos!');
        return [];
      }));

  }

  ngOnInit() {
    this.service.eventEmmiter.subscribe(breedSelected => {
      if (typeof breedSelected == 'string') {
        this.dogs$ = this.service.getDogsByHisBreed(breedSelected);
      }
    });
  }

}
