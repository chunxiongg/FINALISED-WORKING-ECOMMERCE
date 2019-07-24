import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html',
  styles: [`
    .main-content {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 50px;
    }

    .tabs {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 50px;    
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0;
      padding: 50px;
      list-style: none;
    }

  `]
})
export class TabsPage {
  constructor() { }

  test() {
   
  }
}
