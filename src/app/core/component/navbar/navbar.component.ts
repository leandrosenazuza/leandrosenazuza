import { Component } from '@angular/core';
import { NavbarOptions } from '../../static/navbar-options';
import { NoticeBoard } from '../../static/notive-board';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  options: any[] = NavbarOptions;
  notices: any[] = NoticeBoard;

  constructor() {}

  ngOnInit(): void {

  }

}
