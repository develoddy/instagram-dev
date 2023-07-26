import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FiltroService } from '@data/services/api/filtro.service';

@Component({
  selector: 'app-modal-following',
  templateUrl: './modal-following.component.html',
  styleUrls: ['./modal-following.component.css']
})
export class ModalFollowingComponent {

  @Input() currentRoute: string;
  constructor( public filter:FiltroService, private router: Router ) { }

  // closeSwipePost( event: boolean) {
  //   this.filter.showModalFollowers(event);
  // }

}
