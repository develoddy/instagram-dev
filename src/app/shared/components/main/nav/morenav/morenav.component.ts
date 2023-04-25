import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: 'app-morenav',
  templateUrl: './morenav.component.html',
  styleUrls: ['./morenav.component.css']
})
export class MorenavComponent implements OnInit {
  
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  mobileView = false;
  public resizeId: any;
  private screen: any = { small: 0, medium: 400, large: 800};
  
  @ViewChild("asMoreBoddy") asMoreBoddy: ElementRef;
  @ViewChild("asIx78zum5") asIx78zum5: ElementRef;
  
  
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
    this.resizeSubscription$ = this.resizeObservable$.subscribe((e) => {
          clearTimeout(this.resizeId);
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
          if (screenWidth >= this.screen[s]) size = s; iw = screenWidth;
    }
    this.mediaQuery(size!, iw!);
  }

  public mediaQuery(size: string, iw: number) {
    switch (size) {
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
    console.log("DEBUG: render mobile view MAIN : " + iw);
    //this.render(iw);
    this.mobileView = true;
  }


  // Se renderiza para aplicaciones tablet.
  renderTabletView(iw: number) {
      console.log("DEBUG: render Tablet view MAIN : " + iw);
      //this.render(iw);
  }

  // Se renderiza para aplicaciones desktop.
  renderDesktopView(iw: number) {
      console.log("DEBUG: render desktop view MAIN: " + iw);
      this.render(iw);
      this.mobileView = false;
  }

  // Render
  private render(iw:number) {
    const asIx78zum5 = this.asIx78zum5.nativeElement;
    if ( iw < 1264 ) {
      this.render2.removeClass(asIx78zum5, 'x91k8ka');
      this.render2.removeClass(asIx78zum5, 'x1anpbxc');
      this.render2.addClass(asIx78zum5, 'x11x68ut');
    } else {
      this.render2.addClass(asIx78zum5, 'x91k8ka');
      this.render2.addClass(asIx78zum5, 'x1anpbxc');
      this.render2.removeClass(asIx78zum5, 'x11x68ut');
    }
    
  }
}