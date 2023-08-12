import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DogsAPIService } from './service/dogs-api.service';
import { DogsBreed } from './models/Dog';
import { Observable } from 'rxjs';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'teste-frontend-turn2c';
  navButtonTxt: string = 'Perfil';

  breedSelected: string | undefined;
  dogsBreed$!: Observable<DogsBreed[]>;

  @Output() event: EventEmitter<string> = new EventEmitter();

  constructor(
    public router: Router,
    private service: DogsAPIService
  ) {
    this.dogsBreed$ = this.service.getDogsBreeds();
  }

  ngOnInit(): void {
  }

  onValueChange(select: MatSelect) {
    this.breedSelected = select.value;
    this.service.eventEmmiter.next(this.breedSelected?.toString());
  }

  changeRouteSource() {
    if (this.router.url === '/') {
      this.navButtonTxt = 'Home';
      this.router.navigate(['perfil']);
    } else {
      this.router.navigate(['/']);
      this.navButtonTxt = 'Perfil';
    }
  }
}
