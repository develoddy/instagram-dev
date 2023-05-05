import { Component } from '@angular/core';
import { FiltroService } from '@data/services/api/filtro.service';

@Component({
  selector: 'app-show-modal-swipe-horizontal',
  templateUrl: './show-modal-swipe-horizontal.component.html',
  styleUrls: ['./show-modal-swipe-horizontal.component.css']
})
export class ShowModalSwipeHorizontalComponent {

  constructor(private filter:FiltroService) {

  }

  public closeSwipePost(event: boolean) {
    this.filter.displayHorizontalWindowSwipePost(event);
}
}
