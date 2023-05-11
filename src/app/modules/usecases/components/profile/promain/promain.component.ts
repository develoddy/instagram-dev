import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FiltroService } from '@data/services/api/filtro.service';

@Component({
  selector: 'app-promain',
  templateUrl: './promain.component.html',
  styleUrls: ['./promain.component.css']
})
export class PromainComponent implements OnInit {

  @Input() currentRoute: string;

  constructor( private router: Router, private route: ActivatedRoute, public filter: FiltroService ) {
      this.currentRoute = document.location.pathname;
  }

  ngOnInit() {}
}
