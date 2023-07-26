import { Component } from '@angular/core';
import { FiltroService } from '@data/services/api/filtro.service';

@Component({
  selector: 'app-moreposts',
  templateUrl: './moreposts.component.html',
  styleUrls: ['./moreposts.component.css']
})
export class MorepostsComponent {
  constructor(public filter: FiltroService){}
}
