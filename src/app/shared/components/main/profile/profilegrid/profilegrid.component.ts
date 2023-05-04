import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profilegrid',
  templateUrl: './profilegrid.component.html',
  styleUrls: ['./profilegrid.component.css']
})
export class ProfilegridComponent implements OnInit {

  public infoPost : boolean;
  @Output() mouseOverEvent = new EventEmitter();

  constructor() {
    this.infoPost = false;
  }

  ngOnInit() {}

  public mouseInfoPost(hover:boolean){
    this.infoPost = hover;
  }
}
