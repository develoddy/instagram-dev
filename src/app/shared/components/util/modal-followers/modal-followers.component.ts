import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FiltroService } from '@data/services/api/filtro.service';

@Component({
  selector: 'app-modal-followers',
  templateUrl: './modal-followers.component.html',
  styleUrls: ['./modal-followers.component.css']
})
export class ModalFollowersComponent {

  @Input() currentRoute: string;
  constructor( public filter:FiltroService, private router: Router ) { }



}
