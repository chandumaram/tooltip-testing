import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tooltip-testing';
  myOptions = {
    'placement': 'left',
    'showDelay': 500
}
}
