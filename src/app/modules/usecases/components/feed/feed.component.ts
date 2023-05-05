import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2, ViewChild } from "@angular/core";
import { fromEvent, Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"],
})
export class FeedComponent implements OnInit {

      @ViewChild("asSummary") asSummary: ElementRef;
      @ViewChild("asSectionFeed") asSectionFeed: ElementRef;
      @ViewChild("asFeed") asFeed: ElementRef;
      resizeObservable$: Observable<Event>;
      resizeSubscription$: Subscription;
      mobileView = false;
      public resizeId: any;
      private screen: any = { small: 0, medium: 400, large: 800 };
      public temAsSummary: any;
      public tempAsSectionFeed: any;
      public username: string = '';

      constructor(
            private render2: Renderer2,
            private router: Router
      ) {}

      ngOnInit() {
            this.setupView();
      }

      setupView() {
            this.resizeWindows();
            //this.loadWindows();

      }

      loadWindows() {
            let iw = window.innerWidth;
            this.render(iw);
      }
      
      @Output() mouseOverEvent = new EventEmitter();
      mouseOverHeaderPost(event:any) {
            this.mouseOverEvent.emit({id:event.id})
      }

      /**
       * Controlador de cambio de tamaño del width de la pantalla.
       * Se obtiene el ancho de la ventana con windows.innerWidth.
       * Tambien se determina el tamaño y el ancho con nombre.
       * @param
       * @return
       */
      private resizeWindows() {
            this.resizeObservable$ = fromEvent(window, "resize");
            this.resizeSubscription$ = this.resizeObservable$.subscribe((e) => {
                  clearTimeout(this.resizeId);
                  this.resizeId = setTimeout(() => {
                        this.resizeHandler();
                  }, 10);
            });
      }

      // Redimensionar el ancho de la pantalla.
      public resizeHandler() {
            const screenWidth = window.innerWidth;
            let size = null;
            let iw = null;
            for (let s in this.screen) {
                  if (screenWidth >= this.screen[s]) size = s; iw = screenWidth;
            }
            this.mediaQuery(size!, iw!);
      }

      /**
       * Opciones de mediaQuery para diferentes anchos de la pantalla.
       * @param size
       * @param iw
       */
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

      /**
       * Se rederiza para aplicaciones moviles.
       * @param iw
       */
      renderMobileView(iw: number) {
            //console.log("DEBUG: render mobile view FEED: " + iw);
            this.render(iw);
            this.mobileView = true;
      }

      /**
       * Se renderiza para aplicaciones tablet.
       * @param iw
       */
      renderTabletView(iw: number) {
            //console.log("DEBUG: render tablet view FEED : " + iw);
            this.render(iw);
            this.mobileView = false;
      }

      /**
       * Se renderiza para aplicaciones desktop.
       * @param iw
       */
      renderDesktopView(iw: number) {
            //console.log("DEBUG: render  desktop view FEED: " + iw);
            this.render(iw);
            this.mobileView = false;
      }

      /**
       * Esta funcion se encarga de hacer unos cambios en el componente Summary
       * de remover y agregar cuando dependiendo del ancho de la pantalla.
       * @param iw 
       */
      private render(iw: number) {
            const asSummary = this.asSummary.nativeElement;
            const asSectionFeed = this.asSectionFeed.nativeElement;
            const asFeed = this.asFeed.nativeElement;

            // Cambios en el componente summary
            if (iw < 1160) {
                  if (this.temAsSummary) {
                        this.temAsSummary = asSummary;
                        this.render2.removeClass(asSectionFeed, "_akm0");
                        this.render2.removeClass(asFeed, "_akmr");
                        
                  } else {
                        this.temAsSummary = asSummary;
                        this.render2.removeChild(
                              asSectionFeed,
                              asSummary
                        );
                        this.render2.removeClass(asSectionFeed, "_akm0");
                        this.render2.removeClass(asFeed, "_akmr");
                  }
                  
            } else {
                  if (this.temAsSummary) {
                        this.render2.addClass(asSectionFeed, "_akm0");
                        this.render2.addClass(asFeed, "_akmr");
                        this.render2.appendChild(
                              asSectionFeed,
                              this.temAsSummary
                        );
                        this.temAsSummary = null;
                  }
            }
      }

      public gotToProfile( username:string ) {
            this.username = username;
            this.router.navigate([this.username ]);
      }

      // Destruye el servicio despues de Redimensionar el ancho de la pantalla.
      ngOnDestroy() {
            this.resizeSubscription$.unsubscribe();
      }
}
