import { Component, Input, OnInit } from '@angular/core';
import { User, UserStats } from '@data/models/User';
import { FiltroService } from '@data/services/api/filtro.service';

@Component({
  selector: 'app-profileinfo',
  templateUrl: './profileinfo.component.html',
  styleUrls: ['./profileinfo.component.css']
})
export class ProfileinfoComponent implements OnInit {
  @Input() user: User;
  //@Input() stats: UserStats;
  @Input() btnEdit: string;
  
  constructor( public filter : FiltroService ) {}
  ngOnInit() {
  }

}
