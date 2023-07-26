import { Component, Input } from '@angular/core';
import { FiltroService } from '@data/services/api/filtro.service';

@Component({
  selector: 'app-modal-likes',
  templateUrl: './modal-likes.component.html',
  styleUrls: ['./modal-likes.component.css']
})
export class ModalLikesComponent {
    
    @Input() data = [ 
      '1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1',
      '1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1', 
    ];

    constructor(public filter: FiltroService) {}
}
