import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {

  @Input() anchor: string;
  @Input() heading: string;
  @Input() content: string;
  @Input() img: string;
  @Input() alt: string;
  @Input() alternate: boolean;
  @Input() list: boolean;
  @Input() listContent: string[];
  @Input() cta_active: boolean;
  @Input() ctas: {text: string; url: string; type: string;}[];

  constructor() { }

  ngOnInit() {
  }

}
