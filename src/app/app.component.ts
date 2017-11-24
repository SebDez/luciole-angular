import { Component } from '@angular/core';
import 'hammerjs';
/**
 * This component is used as a container for the app
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'lu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * App's title
   * @memberof AppComponent
   */
  title = 'Luciole-BackOffice';
}

