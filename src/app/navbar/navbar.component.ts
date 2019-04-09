import { Component, OnInit, Input } from '@angular/core';
import { BANDS } from '../bands-mock';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() headingTitle: string;

  buttons = BANDS;
  constructor() { }

  ngOnInit() {
  }

}
