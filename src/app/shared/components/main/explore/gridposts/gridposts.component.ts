import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gridposts',
  templateUrl: './gridposts.component.html',
  styleUrls: ['./gridposts.component.css']
})
export class GridpostsComponent implements OnInit {

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