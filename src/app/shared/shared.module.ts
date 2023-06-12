import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../core/component/footer/footer.component';
import { HeaderComponent } from '../core/component/header/header.component';
import { NavbarComponent } from '../core/component/navbar/navbar.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent],
  imports: [
    CommonModule,

  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }
