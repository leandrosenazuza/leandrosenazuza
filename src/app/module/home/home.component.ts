import { Component } from '@angular/core';
import { MenuOptions } from 'src/app/core/static/menu-options';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title: string = 'Portifolio';
  menu: any = MenuOptions;

  constructor() {
  }

  ngOnInit(): void {
    localStorage.clear();
  }

}
