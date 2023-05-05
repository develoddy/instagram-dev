import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-promain',
  templateUrl: './promain.component.html',
  styleUrls: ['./promain.component.css']
})
export class PromainComponent implements OnInit {

  @Input() currentRoute: string;

  constructor( private router: Router, private route: ActivatedRoute ) {
    /*this.currentRoute = "Demo";
    this.router.events.subscribe( (event: any) => {
      if ( event instanceof NavigationEnd ) {
          this.currentRoute = event.url;
          console.log(event);
      }
    });*/
    
      //console.log(document.location.href);
      this.currentRoute = document.location.pathname;
  }

  ngOnInit() {
  }
}
