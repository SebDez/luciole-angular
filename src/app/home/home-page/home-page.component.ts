import { Component, OnInit } from '@angular/core';

/**
 * This component is used as a container for the home page
 * @export
 * @class HomePageComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'lu-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  /**
   * Creates an instance of HomePageComponent.
   * @memberof HomePageComponent
   */
  constructor() { }

  /**
   * Initialize the component
   * @memberof HomePageComponent
   */
  ngOnInit() {
  }

}
