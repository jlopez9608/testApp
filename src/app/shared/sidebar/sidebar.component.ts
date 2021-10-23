import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() isOpened = false; 
  opened: boolean;
  constructor() { 
    this.opened = false;
  }

  ngOnInit(): void {
  }

}
