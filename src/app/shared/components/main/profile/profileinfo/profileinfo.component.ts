import { Component } from '@angular/core';
import { FiltroService } from '@data/services/api/filtro.service';

@Component({
  selector: 'app-profileinfo',
  templateUrl: './profileinfo.component.html',
  styleUrls: ['./profileinfo.component.css']
})
export class ProfileinfoComponent {

  constructor( private filter : FiltroService ) {}

  public showModalFollower(event:boolean) {
    this.filter.showModalFollowers(event);
  }

}
