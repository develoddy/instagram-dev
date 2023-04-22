import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ScriptsService } from '@data/services/api/scripts.service';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public cssUrl: string;
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  mobileView = false;
  public resizeId: any;


  constructor(
    public sanitizer: DomSanitizer,
    public scripts: ScriptsService,
  ) {
    //scripts.loadFiles(['responsive']);
    //this.cssUrl = '/assets/css/responsive.css';
    //this.cssUrl = '/assets/css/root.css';
  }

  ngOnInit() {

    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe(e => {
      clearTimeout(this.resizeId);
      this.resizeId = setTimeout(() => {
        this.resizeHandler();
      }, 300);



      
    });
    //this.screenWidth = window.innerWidth;  
    //console.log(this.screenWidth);
  }

  public resizeHandler() {
    console.log("hacer algo...");

    if (window.innerWidth <= 400) {
      this.renderMobileView();
    } else {
      this.renderDesktopView();
    }
    
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }

  renderMobileView() {
    console.log('render mobile view');
    this.mobileView = true;
  }

  renderDesktopView() {
    console.log('render desktop view');
    this.mobileView = false;
  }


}
