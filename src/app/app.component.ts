import { Component } from '@angular/core';
import { Band } from './band.class';
import { BANDS } from './bands-mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curriculum';
  headingTitle = "R.Amadeu";
  name = "Raphael Amadeu";
  quote = "Learning is like the horizon, it has NO limits.";

  bands = BANDS;
}
