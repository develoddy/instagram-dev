import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FiltroService } from '@data/services/api/filtro.service';

@Component({
  selector: 'app-show-modal-swipe-horizontal',
  templateUrl: './show-modal-swipe-horizontal.component.html',
  styleUrls: ['./show-modal-swipe-horizontal.component.css']
})
export class ShowModalSwipeHorizontalComponent {

 
  @Output() closeSwipeModalPosts = new EventEmitter();
  constructor() {}

  public closeSwipePost(close: boolean) {
      //this.filter.displayHorizontalWindowSwipePost(event, this.currentRoute);
      this.closeSwipeModalPosts.emit(close)
  }
}
