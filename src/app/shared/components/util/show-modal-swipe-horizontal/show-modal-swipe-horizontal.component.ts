import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FiltroService } from '@data/services/api/filtro.service';

@Component({
  selector: 'app-show-modal-swipe-horizontal',
  templateUrl: './show-modal-swipe-horizontal.component.html',
  styleUrls: ['./show-modal-swipe-horizontal.component.css']
})
export class ShowModalSwipeHorizontalComponent {

  @Input() currentRoute: string;
  @Output() closeSwipeModalPosts = new EventEmitter();
  constructor( private filter:FiltroService, private router: Router ) { }

  public closeSwipePost(event: boolean) {
      this.filter.displayHorizontalWindowSwipePost(event, this.currentRoute);
  }
}
