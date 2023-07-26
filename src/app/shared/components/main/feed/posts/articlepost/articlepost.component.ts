import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FiltroService } from '@data/services/api/filtro.service';

@Component({
  selector: 'app-articlepost',
  templateUrl: './articlepost.component.html',
  styleUrls: ['./articlepost.component.css']
})
export class ArticlepostComponent {
    
    currentRoute: string;
    @ViewChild('asProfileImageHeaderRef') asProfileImageHeaderRef:ElementRef;
    @ViewChild('asUsernameHeaderElementRef') asUsernameHeaderElementRef:ElementRef;
    @ViewChild('asUsernameContentElementRef') asUsernameContentElementRef:ElementRef;
    @ViewChild('asButtonEmojisPostRef') asButtonEmojisPostRef:ElementRef;
    @Output() mouseOverEvent = new EventEmitter();
    @Output() mouseOveliEvent = new EventEmitter();
    @Output() emojisPostEvent = new EventEmitter();
    @Output() usernameEvent = new EventEmitter();

    constructor( 
        public filter: FiltroService, 
        private router: Router 
    ) {
        this.currentRoute = "Demo";
        this.router.events.subscribe( (event: any) => {
            if ( event instanceof NavigationEnd ) {
                this.currentRoute = event.url;
            }
        });
        this.currentRoute = document.location.pathname;
    }

    public gotToProfile( username:string ) {
        this.usernameEvent.emit(username);
    }

    mouseover( hover:boolean, option:string ) {
        if ( option == 'img-profile-header' ) {
            this.sendDataToPost(
                hover, 
                option, 
                this.asProfileImageHeaderRef
            );
        }

        if ( option == 'span-username-header' ) {
            this.sendDataToPost(
                hover, 
                option, 
                this.asUsernameHeaderElementRef
            );
        }

        if ( option == 'span-username-content' ) {
            this.sendDataToPost(
                hover, 
                option, 
                this.asUsernameContentElementRef
            );
        }
    }

    sendDataToPost( hover: boolean, option:string, ref:ElementRef ) {
        this.mouseOverEvent.emit({
            hover: hover,
            option: option,
            ref: ref
        });
    }

    public showOption() {
        this.filter.displayOptionPost(true);
    }

    public hideOption() {
        this.filter.displayOptionPost(false);
    }

    public displayEmojis(event:boolean) {
        this.emojisPostEvent.emit({
            click: event,
            ref: this.asButtonEmojisPostRef
        });
    }
}
