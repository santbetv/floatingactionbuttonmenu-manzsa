import {Component} from '@angular/core';

/**
 * @title Floating Action buttons Menu
 */
@Component({
  selector: 'button-overview-example',
  templateUrl: 'button-overview-example.html',
  styleUrls: ['button-overview-example.css'],
})
export class ButtonOverviewExample {
  public openMenu: boolean = false;
  isOver = false;

  clickMenu(){
    this.openMenu = !this.openMenu;
  }

  hello(mex: string){
      alert('Hello '+mex+'!' );
  }
}
