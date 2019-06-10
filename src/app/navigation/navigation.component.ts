import { Component, OnInit } from '@angular/core';
import * as M from '../../assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent implements OnInit {
  private options: any = "";
  private menuStatus: boolean = false;
  private instanceDropdown;
  private dropdown;
  constructor() { }

  ngOnInit() {
    this.dropdown = document.querySelectorAll('.dropdown-trigger');
    this.instanceDropdown = M.Dropdown.init(this.dropdown, {
      container: document.querySelector('.dropdown-trigger'),
      constrainWidth: true
    });
  }
}
