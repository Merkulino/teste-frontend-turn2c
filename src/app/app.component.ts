import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste-frontend-turn2c';
  navButtonTxt: String = 'Perfil';

  constructor(
    public router: Router,
  ) {}

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
