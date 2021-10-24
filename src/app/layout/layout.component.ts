import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isOpen: boolean;
  constructor() {
    this.isOpen=false;
   }

  ngOnInit(): void {
  }

  recievedToggle(){
    this.isOpen?this.isOpen=false:this.isOpen=true;
  }
}
