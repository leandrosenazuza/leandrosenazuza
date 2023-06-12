import { Component } from '@angular/core';
import { NOME_LEANDRO, PORTIFOLIO_LEANDRO, PROFISSAO_LEANDRO } from 'src/app/shared/constants';
import { NavbarOptions } from '../../static/navbar-options';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  title: string = NOME_LEANDRO;
  subtitle: string = PROFISSAO_LEANDRO;
  portifolio: string = PORTIFOLIO_LEANDRO;
  navBarOptions: any = NavbarOptions;

  constructor() { }

  ngOnInit(): void {
    console.log(this.navBarOptions)
  }
}


