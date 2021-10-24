import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() eventToggle = new EventEmitter<any>();
  isOpen: boolean;
  constructor() { 
    this.isOpen = false;
  }

  ngOnInit(): void {
  }

  sendToggle(){
    this.eventToggle.emit();
    this.isOpen = environment.isOpen;
    environment.isOpen?environment.isOpen=false:environment.isOpen=true;
    
    console.log(environment.isOpen);
  }
}
