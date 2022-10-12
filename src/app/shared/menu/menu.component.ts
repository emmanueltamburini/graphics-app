import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  public items: MenuItem[] = [
    { route: 'graphics/bars', text: 'Bars' },
    { route: 'graphics/double-bars', text: 'Double Bars' },
    { route: 'graphics/donuts', text: 'Donuts' },
    { route: 'graphics/donuts-http', text: 'Donuts Http' }
  ];

}
