import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leandrosenazuza';
  isHomePage: boolean = true;
  isPageNotFound: boolean = false;


  //Cria-se o serviço para roteamento
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      this.pageNotFound();

      if(val instanceof NavigationEnd) {
        this.hideNavbar(val);
      }
    });
  }

    // Ocultar Navbar, Header e Footer ao dar 404
    pageNotFound(): void {

    }


  // Ocultar navbar ao sair da Home
  hideNavbar(route: NavigationEnd): void {
    if(route.url !== '/') {
      this.isHomePage = route.url == '/home';
    }
  }



}
