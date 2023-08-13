import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DogsBreed } from 'src/app/models/Dog';
import { DogsAPIService } from 'src/app/service/dogs-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  homeComponent: boolean = true;
  navButtonTxt: string = 'Perfil';
  breedSelected: string | undefined;
  dogsBreed$!: Observable<DogsBreed[]>;
  @Output() event: EventEmitter<string> = new EventEmitter();

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private service: DogsAPIService
  ) {
    this.dogsBreed$ = this.service.getDogsBreeds();
  }
  
  ngOnInit(): void {
    console.log(this.route.url);
  }

  onValueChange(select: MatSelect) {
    this.breedSelected = select.value;
    this.service.eventEmmiter.next(this.breedSelected?.toString());
  }

  changeRouteSource() {
    if (this.router.url === '/') {
      this.navButtonTxt = 'Home';
      this.router.navigate(['perfil']);
      this.homeComponent = false;
    } else {
      this.router.navigate(['/']);
      this.navButtonTxt = 'Perfil';
      this.homeComponent = true;
    }
  }
}
