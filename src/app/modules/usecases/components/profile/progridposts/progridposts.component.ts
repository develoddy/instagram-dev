import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-progridposts',
  templateUrl: './progridposts.component.html',
  styleUrls: ['./progridposts.component.css']
})
export class ProgridpostsComponent implements OnInit {

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