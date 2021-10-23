import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() eventToggle = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  sendToggle(){
    this.eventToggle.emit();
  }
}
