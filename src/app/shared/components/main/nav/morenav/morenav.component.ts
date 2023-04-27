import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-morenav',
  templateUrl: './morenav.component.html',
  styleUrls: ['./morenav.component.css']
})
export class MorenavComponent implements OnInit {
  
  @ViewChild("asMoreBoddy") asMoreBoddy: ElementRef;
  @ViewChild("asIx78zum5") asIx78zum5: ElementRef;
  @ViewChild("asIx10l6tqk") asIx10l6tqk: ElementRef;
  @ViewChild("asIxgf5ljw") asIxgf5ljw: ElementRef;
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  mobileView = false;
  public resizeId: any;
  private screen: any = { small: 0, medium: 400, large: 800 };
  
  constructor(private render2: Renderer2) {}

  ngAfterViewInit() {}

  ngOnInit() {
    this.setupView();
  }

  setupView() {
        this.resizeWindows();
  }

  private resizeWindows() {
    this.resizeObservable$ = fromEvent(window, "resize");
    this.resizeSubscription$ = this.resizeObservable$.subscribe(( e ) => {
          clearTimeout( this.resizeId );
          this.resizeId = setTimeout(() => {
                this.resizeHandler();
          }, 10);
    });
  }

  public resizeHandler() {
    const screenWidth = window.innerWidth;
    let size = null;
    let iw = null;
    for ( let s in this.screen ) {
          if ( screenWidth >= this.screen[ s ] ) size = s; iw = screenWidth;
    }
    this.mediaQuery(size!, iw!);
  }

  public mediaQuery( size: string, iw: number ) {
    switch ( size ) {
          case "small":
                this.renderMobileView(iw);
                break;
          case "medium":
                this.renderTabletView(iw);
                break;
          case "large":
                this.renderDesktopView(iw);
                break;
          default:
                console.log("error..");
                break;
    }
  }

  // Se renderiza para aplicaciones moviles.
  renderMobileView(iw: number) {
    //console.log("DEBUG: render mobile view MAIN : " + iw);
    //this.render(iw);
    this.mobileView = true;
  }


  // Se renderiza para aplicaciones tablet.
  renderTabletView(iw: number) {
      //console.log("DEBUG: render Tablet view MAIN : " + iw);
      //this.render(iw);
  }

  // Se renderiza para aplicaciones desktop.
  renderDesktopView(iw: number) {
      //console.log("DEBUG: render desktop view MAIN: " + iw);
      this.render(iw);
      this.mobileView = false;
  }

  // Render
  private render(iw:number) {
    const asIx78zum5 = this.asIx78zum5.nativeElement;
    const asIx10l6tqk = this.asIx10l6tqk.nativeElement;
    const asIxgf5ljw = this.asIxgf5ljw.nativeElement;

    if ( iw < 1264 ) {
      this.render2.removeClass(asIx78zum5, 'x91k8ka');
      this.render2.removeClass(asIx78zum5, 'x1anpbxc');
      this.render2.addClass(asIx78zum5, 'x11x68ut');

      // --
      this.render2.removeClass(asIx10l6tqk, 'x11f4b5y');
      this.render2.removeClass(asIx10l6tqk, 'x1ey2m1c');
      this.render2.removeClass(asIx10l6tqk, 'x17adc0v');
      this.render2.addClass(asIx10l6tqk, 'xmbx2d0');
      this.render2.addClass(asIx10l6tqk, 'x17qophe');
      this.render2.addClass(asIx10l6tqk, 'xyorhqc');

      // --
      this.render2.removeClass(asIxgf5ljw, 'xdlhfag');
      this.render2.removeClass(asIxgf5ljw, 'x1rbgqaq');
      this.render2.removeClass(asIxgf5ljw, 'xqd3l62');
      this.render2.addClass(asIxgf5ljw, 'x1cu5jd9');
      this.render2.addClass(asIxgf5ljw, 'xr6gfmr');

    } else {
      this.render2.addClass(asIx78zum5, 'x91k8ka');
      this.render2.addClass(asIx78zum5, 'x1anpbxc');
      this.render2.removeClass(asIx78zum5, 'x11x68ut');

      // --
      this.render2.removeClass(asIx10l6tqk, 'xmbx2d0');
      this.render2.removeClass(asIx10l6tqk, 'x17qophe');
      this.render2.removeClass(asIx10l6tqk, 'xyorhqc');
      this.render2.addClass(asIx10l6tqk, 'x11f4b5y');
      this.render2.addClass(asIx10l6tqk, 'x1ey2m1c');
      this.render2.addClass(asIx10l6tqk, 'x17adc0v');

      // --
      this.render2.removeClass(asIxgf5ljw, 'x1cu5jd9');
      this.render2.removeClass(asIxgf5ljw, 'xr6gfmr');
      this.render2.addClass(asIxgf5ljw, 'xdlhfag');
      this.render2.addClass(asIxgf5ljw, 'x1rbgqaq');
      this.render2.addClass(asIxgf5ljw, 'xqd3l62');
    }
    
  }
}