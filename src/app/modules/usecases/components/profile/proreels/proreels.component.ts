import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proreels',
  templateUrl: './proreels.component.html',
  styleUrls: ['./proreels.component.css']
})
export class ProreelsComponent implements OnInit {

  @Input() currentRoute: string;
  @Input() activeReels: boolean;

  constructor( 
    private router: Router, 
    private route: ActivatedRoute 
  ) {
      this.activeReels = false;
      this.currentRoute = document.location.pathname;
  }

  ngOnInit(){}
}
