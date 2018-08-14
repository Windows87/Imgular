import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-little-image',
  templateUrl: './little-image.component.html',
  styleUrls: ['./little-image.component.css']
})
export class LittleImageComponent {
  url = 'http://localhost:3001/images/200/';
  @Input() image: string = '';
  @Input() id: string = '';

  constructor() {}
}
