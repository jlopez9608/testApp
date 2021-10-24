import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { environment } from 'src/environments/environment';
import { menu } from '../models/menu';
import { NavItem } from '../models/navItems';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // @ViewChild(MatAccordion) accordion: MatAccordion;
  @Input() isOpened = false; 
  
  menu: NavItem[]= menu;

  constructor() { 

  }

  hideMenu(){
    console.log('hideMenu');
    environment.isOpen?environment.isOpen=false:environment.isOpen=true;
    console.log(environment.isOpen);
    this.isOpened=false;
  }
  ngOnInit(): void {
    environment.isOpen = true;
  }

}
