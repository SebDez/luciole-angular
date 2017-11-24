import { Component, OnInit } from '@angular/core';

/**
 * This component is used as a container for the game version management page
 * @export
 * @class GameVersionsPageComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'lu-game-versions-page',
  templateUrl: './game-versions-page.component.html',
  styleUrls: ['./game-versions-page.component.css']
})
export class GameVersionsPageComponent implements OnInit {

  /**
   * Creates an instance of GameVersionsPageComponent.
   * @memberof GameVersionsPageComponent
   */
  constructor() { }

  /**
   * Initialize the component
   * @memberof GameVersionsPageComponent
   */
  ngOnInit() {
  }

}
