import { Component, OnInit } from '@angular/core';

/**
 * This component is used as a container for the configuration page
 * @export
 * @class ConfigurationPageComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'lu-configuration-page',
  templateUrl: './configuration-page.component.html',
  styleUrls: ['./configuration-page.component.css']
})

export class ConfigurationPageComponent implements OnInit {

  /**
   * Creates an instance of ConfigurationPageComponent.
   * @memberof ConfigurationPageComponent
   */
  constructor() { }

  /**
   * Initialize the component
   * @memberof ConfigurationPageComponent
   */
  ngOnInit() {
  }

}
