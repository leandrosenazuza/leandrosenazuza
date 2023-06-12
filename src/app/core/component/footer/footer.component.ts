import { Component } from '@angular/core';
import { VERSAO_SISTEMA } from 'src/app/shared/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  versao = VERSAO_SISTEMA;

  constructor(){}

  ngOnInit(): void {

  }

}
