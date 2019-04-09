import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leadspace',
  templateUrl: './leadspace.component.html',
  styleUrls: ['./leadspace.component.css']
})
export class LeadspaceComponent implements OnInit {
  @Input() name: string;
  @Input() quote: string;
  constructor() { }

  ngOnInit() {
  }

}
