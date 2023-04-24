import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from "@angular/core";
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.css"],
})
export class FeedComponent implements OnInit {
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  mobileView = false;
  public resizeId: any;
  private screen: any = { small: 0, medium: 400, large: 800 };
  @ViewChild("asSummary") asSummary: ElementRef;
  @ViewChild("asSectionFeed") asSectionFeed: ElementRef;
  @ViewChild("asFeed") asFeed: ElementRef;
  public temAsSummary: any;
  public tempAsSectionFeed: any;

  constructor(private render2: Renderer2) {}

  ngOnInit() {
        this.setupView();
  }

  setupView() {
        this.resizeWindows();
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

  public resizeHandler() {
        // Obtener ancho de ventana.
        const screenWidth = window.innerWidth;
        // Determinar el tamaño y el ancho con nombre.
        let size = null;
        let iw = null;
        for (let s in this.screen) {
              if (screenWidth >= this.screen[s]) size = s; iw = screenWidth;
        }
        // Aplicar la media Query en cada tamaño de la pantalla.
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

  // Redenreizado para movil.
  renderMobileView(iw: number) {
        console.log("DEBUG: render mobile view FEED: " + iw);
        this.mobileView = true;
  }

  // Redenreizado para tablet.
  renderTabletView(iw: number) {
        console.log("DEBUG: render tablet view FEED : " + iw);
        
        this.mobileView = false;
  }

  /**
   * Renderizado para desktop.
   * Esta funcion se encarga de hacer unos cambios en el componente Summary
   * de remover y agregar cuando dependiendo del ancho de la pantalla.
   * @param iw
   */
  renderDesktopView(iw: number) {
        console.log("DEBUG: render  desktop view FEED: " + iw);
        const asSummary = this.asSummary.nativeElement;
        const asSectionFeed = this.asSectionFeed.nativeElement;
        const asFeed = this.asFeed.nativeElement;

        // ----- [ Cambios en el componente summary ] ---
        if (iw < 1160) {
          console.log("DEBUG: IF..");
          
              //if (asSectionFeed.classList.contains("_aalv")) {
                    if (this.temAsSummary) {
                          //this.temAsSummary = asSummary;
                          this.render2.removeChild(
                            asSectionFeed,
                            asSummary
                          );
                          this.temAsSummary = null;
                          this.render2.removeClass(asSectionFeed, "_akm0");
                          this.render2.removeClass(asFeed, "_akmr");
                          
                    } else {
                          this.temAsSummary = asSummary;
                          /*this.render2.removeChild(
                                asSectionFeed,
                                asSummary
                          );*/
                          this.render2.removeClass(asSectionFeed, "_akm0");
                          this.render2.removeClass(asFeed, "_akmr");
                    }
              //}
        } else {
          console.log("DEBUG: ELSE..");
              if (this.temAsSummary) {
                    this.render2.addClass(asSectionFeed, "_akm0");
                    this.render2.addClass(asFeed, "_akmr");
                    this.render2.appendChild(
                          asSectionFeed,
                          this.temAsSummary
                    );
              }
        }
        this.mobileView = false;
  }

  /**
   * Se destruye el servicio.
   */
  ngOnDestroy() {
        this.resizeSubscription$.unsubscribe();
  }
}
