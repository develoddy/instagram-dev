import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FiltroService } from '@data/services/api/filtro.service';

@Component({
  selector: 'app-gridposts',
  templateUrl: './gridposts.component.html',
  styleUrls: ['./gridposts.component.css']
})
export class GridpostsComponent implements OnInit {
  
    currentRoute: string;
    public infoPost : boolean;
    @Output() mouseOverEvent = new EventEmitter();

    constructor(
        private filter: FiltroService, 
        private router: Router
    ) {
        this.infoPost = false;
        this.currentRoute = "Demo";
        this.router.events.subscribe( (event: any) => {
            if ( event instanceof NavigationEnd ) {
                this.currentRoute = event.url;
            }
        });
        this.currentRoute = document.location.pathname;
    }

    ngOnInit() {}

    public mouseInfoPost(hover:boolean){
        this.infoPost = hover;
    }

    public displayHorizontalWindowSwipePost(event: boolean, currentRoute: string) {
        this.filter.displayHorizontalWindowSwipePost(event, currentRoute); 
    }

    // public sendURL() {
    //     this.router.navigate(['/p/CoU0qxhok_w', { queryParams: { order: 'popular' } }]);
    // }
}