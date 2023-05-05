import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
      private filter: FiltroService,
      private router: Router
  ) {
      this.infoPost = false;
  }

  ngOnInit() {}

  public mouseInfoPost(hover:boolean){
      this.infoPost = hover;
  }

  public displayHorizontalWindowSwipePost(event: boolean) {
      this.filter.displayHorizontalWindowSwipePost(event); // true
      this.router.navigate(["p/idxx"]);
  }
}