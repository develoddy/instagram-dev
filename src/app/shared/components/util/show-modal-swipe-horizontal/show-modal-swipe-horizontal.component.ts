import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FiltroService } from '@data/services/api/filtro.service';

@Component({
  selector: 'app-show-modal-swipe-horizontal',
  templateUrl: './show-modal-swipe-horizontal.component.html',
  styleUrls: ['./show-modal-swipe-horizontal.component.css']
})
export class ShowModalSwipeHorizontalComponent {

  constructor(private filter:FiltroService, private router: Router) {}

  public closeSwipePost(event: boolean) {
      this.filter.displayHorizontalWindowSwipePost(event);
      this.router.navigate(["/lujandev"]);  
  }
}
