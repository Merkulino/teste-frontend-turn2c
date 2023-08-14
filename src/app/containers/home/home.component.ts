import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { DogResponse } from 'src/app/models/Dog';
import { DogsAPIService } from 'src/app/service/dogs-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  dogs$: Observable<DogResponse[]> | undefined;

  constructor(private service: DogsAPIService) {
    this.refresh()
  }

  refresh(page: string = '0') {
    this.dogs$ = this.service.getDogs(page).pipe(
      catchError(error => {
        console.log('erro ao recuperar dogs' + error);
        alert('Erro ao recuperar cachorros!');
        return [];
      }));
  }
  
  ngOnInit(): void {
    this.service.eventEmmiter.subscribe(breedSelected => {
      if (typeof breedSelected == 'string') {
        this.dogs$ = this.service.getDogsByHisBreed(breedSelected);
      }
    });
  }

  onPageChange($event: any) {
    this.refresh($event);
  }

  ngOnDestroy(): void {
    // this.service.eventEmmiter.unsubscribe();
  }

}
