import { Component, OnInit } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { DogResponse } from 'src/app/models/Dog';
import { DogsAPIService } from 'src/app/service/dogs-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dogs$: Observable<DogResponse[]> | undefined;
  currentBreedId!: string; 

  constructor(private service: DogsAPIService) {
    this.refresh()
  }

  ngOnInit(): void {
    this.refreshByBreedId();
  }

  refresh(page: string = '0') {
    this.dogs$ = this.service.getDogs(page).pipe(
      catchError(error => {
        console.log('erro ao recuperar dogs' + error);
        alert('Erro ao recuperar cachorros!');
        return [];
      }));
  }

  refreshByBreedId(page: string = '0') {
    if (this.currentBreedId) {
      this.dogs$ = this.service.getDogsByHisBreed(this.currentBreedId, page);
    }
    this.service.eventEmmiter.subscribe(breedSelected => {
      if (typeof breedSelected == 'string') {
        this.currentBreedId = breedSelected
        this.dogs$ = this.service.getDogsByHisBreed(breedSelected, page);
      } 
    });
  }
  
  onPageChange($event: any) {
    if (this.currentBreedId) {
      this.refreshByBreedId($event);
    } else {
      this.refresh($event);
    }
  }

}
