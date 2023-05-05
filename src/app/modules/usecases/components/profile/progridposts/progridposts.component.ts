import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FiltroService } from '@data/services/api/filtro.service';

@Component({
  selector: 'app-progridposts',
  templateUrl: './progridposts.component.html',
  styleUrls: ['./progridposts.component.css']
})
export class ProgridpostsComponent implements OnInit {

  public infoPost : boolean;
  @Output() mouseOverEvent = new EventEmitter();

  constructor(
    private filter: FiltroService
  ) {
      this.infoPost = false;
  }

  ngOnInit() {}

  public mouseInfoPost(hover:boolean){
      this.infoPost = hover;
  }

  public displayHorizontalWindowSwipePost(event: boolean) {
    // call filter
    this.filter.displayHorizontalWindowSwipePost(event); // true
  }

  
}