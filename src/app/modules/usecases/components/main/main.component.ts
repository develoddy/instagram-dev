import {
      Component,
      ElementRef,
      OnInit,
      Renderer2,
      ViewChild,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { ScriptsService } from "@data/services/api/scripts.service";
import { fromEvent, Observable, Subscription } from "rxjs";

@Component({
      selector: "app-main",
      templateUrl: "./main.component.html",
      styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
      public cssUrl: string;
      resizeObservable$: Observable<Event>;
      resizeSubscription$: Subscription;
      mobileView = false;
      public resizeId: any;
      private screen: any = {
            small: 0,
            medium: 400,
            large: 800,
      };

      @ViewChild("asParent") asParent: ElementRef;
      @ViewChild("asIx9f619") asIx9f619: ElementRef;
      @ViewChild("asIxvb8j5") asIxvb8j5: ElementRef;
      @ViewChild("asIx1cy8zhl") asIx1cy8zhl: ElementRef;
      @ViewChild("asIx2lah0s") asIx2lah0s: ElementRef;
      @ViewChild("asIxh8yej3") asIxh8yej3: ElementRef;
      @ViewChild("asIxl5mz7h") asIxl5mz7h: ElementRef;
      @ViewChild("as002") as002: ElementRef;
      @ViewChild("as003") as003: ElementRef;
      @ViewChild("as006") as006: ElementRef;
      @ViewChild("as007") as007: ElementRef;
      @ViewChild("asParentSearch") asParentSearch: ElementRef;
      @ViewChild("asSideSearch") asSideSearch: ElementRef;
      @ViewChild("asParentMain") asParentMain: ElementRef;
      @ViewChild("asMorenav") asMorenav: ElementRef;
      @ViewChild("asIx78zum5") asIx78zum5: ElementRef;
      @ViewChild("asMoreBoddy") asMoreBoddy: ElementRef;
      
      
      public tempAsIx2lah0s: any;
      public tempAsIxh8yej3: any;
      public tempAsIxl5mz7h: any;
      public tempAsIxh8yej3ChildNodes: any;
      public arrCopyTempAsIxh8yej3ChildNodes: any[];
      public temp002: any;
      public temp006: any;
      public tempAsSideSearch: any;
      public tempAsMorenav: any;

      constructor(
            public sanitizer: DomSanitizer,
            public scripts: ScriptsService,
            private render2: Renderer2
      ) {}

      ngAfterViewInit() {
            this.setupAfterView();
            this.removeSidebarByGlobalClick();
      }

      ngOnInit() {
            this.setupView();
      }

      setupView() {
            this.resizeWindows();
      }

      /**
       * Se inicializa y se prepara los elementos.
       * Se empieza a borrar todos elementos que no son usados cuando arranca la aplicación
       * routerLink]="['search']"
       * @param
       * @returns
       */
      setupAfterView() {
            
            // --- Configuración de la barra lateral de búsqueda. ---
            const asSideSearch = this.asSideSearch.nativeElement;
            const asParentSearch = this.asParentSearch.nativeElement;
            this.tempAsSideSearch = asSideSearch;
            this.render2.removeChild(asParentSearch, asSideSearch);

            // --- Configuración de la ventana showmore. ---
            const asIx78zum5 = this.asIx78zum5.nativeElement;
            const asMorenav = this.asMorenav.nativeElement;
            this.tempAsMorenav = asMorenav;
            this.render2.removeChild(asIx78zum5, asMorenav);
      }

      /**
       * Resize windows.
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

      /**
       * Controlador de cambio de tamaño del width de la pantalla.
       * Se obtiene el ancho de la ventana con windows.innerWidth.
       * Tambien se determina el tamaño y el ancho con nombre.
       * @param
       * @return
       */
      public resizeHandler() {
            // Obtener ancho de ventana.
            const screenWidth = window.innerWidth;
            // Determinar el tamaño y el ancho con nombre.
            let size = null;
            let iw = null;
            for (let s in this.screen) {
                  if (screenWidth >= this.screen[s]) size = s;
                  iw = screenWidth;
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

      /**
       * Se renderiza para aplicaciones moviles.
       * @param iw
       */
      renderMobileView(iw: number) {
            console.log("DEBUG: render mobile view MAIN : " + iw);
            this.render(iw);
            this.mobileView = true;
      }

      /**
       * Se renderiza para aplicaciones tablet.
       * @param iw
       */
      renderTabletView(iw: number) {
            console.log("DEBUG: render Tablet view MAIN : " + iw);
            this.render(iw);
      }

      /**
       * Se renderiza para aplicaciones desktop.
       * @param iw
       */
      renderDesktopView(iw: number) {
            console.log("DEBUG: render desktop view MAIN: " + iw);
            this.render(iw);
            this.mobileView = false;
      }

      /**
       * Esta función se encarga de renderizar para diferentes pantallas.
       * @param iw
       */
      private render(iw: number) {
            const asParent = this.asParent.nativeElement;
            const asIx9f619 = this.asIx9f619.nativeElement;
            const asIxvb8j5 = this.asIxvb8j5.nativeElement;
            const asIx1cy8zhl = this.asIx1cy8zhl.nativeElement;
            const asIx2lah0s = this.asIx2lah0s.nativeElement;
            const asIxh8yej3 = this.asIxh8yej3.nativeElement;
            const asIxl5mz7h = this.asIxl5mz7h.nativeElement;
            const as002 = this.as002.nativeElement;
            const as003 = this.as003.nativeElement;
            const as006 = this.as006.nativeElement;
            const as007 = this.as007.nativeElement;

            /**
             * Se modifica las clases del elemento padre para realizar
             * un cambio en el nav vertifical.
             */
            if (iw <= 767) {
                  if (asParent.classList.contains("x1q0g3np")) {
                        
                        this.render2.addClass(asParent, "xdt5ytf");
                        this.render2.removeClass(asParent, "x1q0g3np");

                        this.removeOrAddSpecifiedClasses(
                              asIx9f619,
                              "xg7h5cd xh8yej3 x1vjfegm x1ey2m1c x80663w x1jeouym x6w1myc",
                              "addClass"
                        );
                        this.removeOrAddSpecifiedClasses(
                              asIx9f619,
                              "xeq5yr9 x1dr59a3 x13vifvy x1n327nk",
                              "removeClass"
                        );

                        this.removeOrAddSpecifiedClasses(
                              asIxvb8j5,
                              "xvbhtw8 xh8yej3",
                              "addClass"
                        );
                        this.removeOrAddSpecifiedClasses(
                              asIxvb8j5,
                              "xvb8j5 x1vjfegm",
                              "removeClass"
                        );

                        this.removeOrAddSpecifiedClasses(
                              asIx1cy8zhl,
                              "xh8yej3 x1q0g3np x1n2onr6 xaw8158 xtuw4uo",
                              "addClass"
                        );
                        this.removeOrAddSpecifiedClasses(
                              asIx1cy8zhl,
                              "x1cy8zhl xdt5ytf x1gvbg2u x1y1aw1k xn6708d xx6bls6 x1ye3gou xvbhtw8 x1xgvd2v",
                              "removeClass"
                        );

                        /**
                         * Se modifica los children para ocultar el nav verticial
                         * y se muetre en forma horizontal en el pie de la aplicatión.
                         */
                        if (this.tempAsIx2lah0s || this.tempAsIxl5mz7h) {
                              this.tempAsIx2lah0s = asIx2lah0s;
                              this.tempAsIxl5mz7h = asIxl5mz7h;
                              this.render2.removeChild(asIx1cy8zhl, asIx2lah0s);
                              this.render2.removeChild(asIx1cy8zhl, asIxl5mz7h);
                              this.temp002 = this.as002;
                              this.temp006 = this.as006;
                              this.render2.removeChild(asIxh8yej3, as002);
                              this.render2.removeChild(asIxh8yej3, as006);
                              this.appendChilds(asIx1cy8zhl, asIxh8yej3);
                              this.render2.removeChild(asIx1cy8zhl, asIxh8yej3);
                        } else {
                              this.tempAsIx2lah0s = asIx2lah0s;
                              this.tempAsIxl5mz7h = asIxl5mz7h;
                              this.render2.removeChild(asIx1cy8zhl, asIx2lah0s);
                              this.render2.removeChild(asIx1cy8zhl, asIxl5mz7h);
                              this.temp002 = this.as002;
                              this.temp006 = this.as006;
                              this.render2.removeChild(asIxh8yej3, as002);
                              this.render2.removeChild(asIxh8yej3, as006);
                              this.appendChilds(asIx1cy8zhl, asIxh8yej3);
                              this.render2.removeChild(asIx1cy8zhl, asIxh8yej3);
                        }
                  }
            } else {
                  if (asParent.classList.contains("xdt5ytf")) {
                     
                        this.render2.removeClass(asParent, "xdt5ytf");
                        this.render2.addClass(asParent, "x1q0g3np");

                       
                        this.removeOrAddSpecifiedClasses(
                              asIx9f619,
                              "xeq5yr9 x1dr59a3 x13vifvy x1n327nk xaw8158 xtuw4uo",
                              "addClass"
                        );
                        this.removeOrAddSpecifiedClasses(
                              asIx9f619,
                              "xg7h5cd xh8yej3 x1vjfegm x1ey2m1c x80663w x1jeouym x6w1myc",
                              "removeClass"
                        );

                       
                        this.removeOrAddSpecifiedClasses(
                              asIxvb8j5,
                              "xvb8j5 x1vjfegm",
                              "addClass"
                        );
                        this.removeOrAddSpecifiedClasses(
                              asIxvb8j5,
                              "xvbhtw8 xh8yej3",
                              "removeClass"
                        );

                        this.removeOrAddSpecifiedClasses(
                              asIx1cy8zhl,
                              "x1cy8zhl xdt5ytf x1gvbg2u x1y1aw1k xn6708d xx6bls6 x1ye3gou xvbhtw8 x1xgvd2v",
                              "addClass"
                        );
                        this.removeOrAddSpecifiedClasses(
                              asIx1cy8zhl,
                              "xh8yej3 x1q0g3np x1n2onr6 xaw8158 xtuw4uo",
                              "removeClass"
                        );

                        /**
                         * Se modifica los children para ocultar el nav verticial
                         * y se muetre en forma horizontal en el pie de la aplicatión.
                         */
                        this.appendChilds(asIxh8yej3, asIx1cy8zhl);
                        this.render2.appendChild(asIx1cy8zhl, asIx2lah0s);

                        this.render2.insertBefore(asIxh8yej3, as002, as003);
                        this.render2.insertBefore(asIxh8yej3, as006, as007);
                        this.render2.appendChild(asIx1cy8zhl, asIxh8yej3);

                        this.render2.appendChild(asIx1cy8zhl, asIxl5mz7h);
                  }
            }
      }

      /**
       * Se agrega o se borra varias clases de un elemento.
       * @param classes
       * @param selector
       * @param option
       */
      private removeOrAddSpecifiedClasses(
            selector: any,
            classes: string,
            option: string
      ) {
            switch (option) {
                  case "addClass":
                        classes.split(" ").forEach((className: string) => {
                              this.render2.addClass(selector, className);
                        });
                        break;
                  case "removeClass":
                        classes.split(" ").forEach((className: string) => {
                              this.render2.removeClass(selector, className);
                        });
                        break;
                  default:
                        console.log("error..");
                        break;
            }
      }

      /**
       * Esta función se encarga de agregar varios children en el
       * elemento padre selecccionado.
       * @param parenet
       * @param children
       */
      private appendChilds(parenet: any, children: any) {
            if ( children.childNodes.length > 0 ) {
                  while ( children.childNodes.length > 0 ) {
                        this.render2.appendChild(
                              parenet,
                              children.childNodes[0]
                        );
                  }
            } else {
                  console.log("DEBUG: fuction appendChilds devuelve vacio..");
            }
      }

    
      // Agrega o borra la barra lateral de la búsqueda en el Nav.
      public addOrRemoveSideSearchWindow() {
            const asParentSearch = this.asParentSearch.nativeElement;
            const countSideSearchChildNodes = asParentSearch.childNodes.length;
            if ( countSideSearchChildNodes < 2 ) {

                  /**
                   * Se comprueba si antes de abrir la barra lateral
                   * existe abierto la ventana de showMoreNav, en caso de que esté
                   * abierto, entonces se procede a borrarlo de la vista.
                   */
                  const asMorenav = this.asMorenav.nativeElement;
                  const asIx78zum5 = this.asIx78zum5.nativeElement;
                  const countMoreChildNodes = asIx78zum5.childNodes.length;

                  if ( countMoreChildNodes > 1 ) {
                        this.render2.removeChild(
                              asIx78zum5, 
                              asMorenav
                        );
                  }

                  /**
                   * En caso de que que el elemento showMorenav no 
                   * exista en la vista, entonces se abre normalmente la 
                   * barra laatera de búsqueda.
                   */
                  this.addSideSearch();

            } else {
                  this.removeSideSearch();
            }
      }

      // Agrega o borra el elemento ShoeMoreNav en el Nav.
      public addOrRemoveMoreNav() {
            const iw = window.innerWidth;
            const asIx78zum5 = this.asIx78zum5.nativeElement;
            const asMorenav = this.asMorenav.nativeElement;
            const countChildNodes = asIx78zum5.childNodes.length;
            const asMoreBoddy = this.asMoreBoddy.nativeElement;
            if ( countChildNodes < 2 ) {
                  this.render2.removeStyle(asMoreBoddy, 'transform');
                  if ( iw < 800 ) {
                        this.render2.removeStyle(asMoreBoddy, 'transform');
                        this.render2.setStyle(asMoreBoddy, 'transform', 'translate(60px, 657px) translate(0px, -100%)');
                  } else {
                        this.render2.setStyle(asMoreBoddy, 'transform', 'translate(12px, 688px) translate(0px, -100%)');
                  }
                  this.render2.appendChild(
                        asIx78zum5, 
                        this.tempAsMorenav
                  );
            } else {
                  this.render2.removeChild(
                        asIx78zum5, 
                        asMorenav
                  );
            }
      }

      // Agrega el elemento de la barra de búsqueda en el Nav.
      private addSideSearch() {
            const asIxvb8j5 = this.asIxvb8j5.nativeElement;
            const asIx1cy8zhl = this.asIx1cy8zhl.nativeElement;
            const asParentSearch = this.asParentSearch.nativeElement;
            const asSideSearch = this.asSideSearch.nativeElement;
            this.render2.removeStyle(asIxvb8j5, "transform");
            this.render2.setStyle(asIxvb8j5, "transform", "translateX(-263px)");

            this.removeOrAddSpecifiedClasses(
                  asIx1cy8zhl,
                  "x1o5hw5a xaeubzz",
                  "removeClass"
            );
            this.render2.removeStyle(asIx1cy8zhl, "transform");
            this.render2.setStyle(
                  asIx1cy8zhl,
                  "transform",
                  "translateX(263px)"
            );

            let transformX = 0;
            this.render2.setStyle(
                  asSideSearch, 'transform', 
                  `translateX(${ transformX }%)`
            );
            
            this.render2.appendChild(
                  asParentSearch, 
                  this.tempAsSideSearch
            );
      }

      // Bora el elemento de la barra de búsqueda en el Nav.
      private removeSideSearch() {
            const asIxvb8j5 = this.asIxvb8j5.nativeElement;
            const asIx1cy8zhl = this.asIx1cy8zhl.nativeElement;
            const asParentSearch = this.asParentSearch.nativeElement;
            const asSideSearch = this.asSideSearch.nativeElement;

            this.render2.removeStyle(asIxvb8j5, "transform");
            this.render2.setStyle(
                  asIxvb8j5,
                  "transform",
                  "translateX(0px)"
            );

            this.removeOrAddSpecifiedClasses(
                  asIx1cy8zhl,
                  "x1o5hw5a xaeubzz",
                  "addClass"
            );
            this.render2.removeStyle(asIx1cy8zhl, "transform");
            this.render2.setStyle(
                  asIx1cy8zhl,
                  "transform",
                  "translateX(0px)"
            );

            this.render2.removeChild(asParentSearch, asSideSearch);
      }

  
      /**
       * Esta función detecta los click en el componente Main, y 
       * se aplica la logica acorde a los que el usuario va 
       * abriendo o cerrando elementos en la 
       * vista del Nav.
       */
      private removeSidebarByGlobalClick() {
            const asSideSearch = this.asSideSearch.nativeElement;
            const asParentSearch = this.asParentSearch.nativeElement;
            const asParentMain = this.asParentMain.nativeElement;
            const asIxvb8j5 = this.asIxvb8j5.nativeElement;
            const asIx1cy8zhl = this.asIx1cy8zhl.nativeElement;
            this.render2.listen(asParentMain, "click", (event) => {

                  // -- Borra el elemento de la barra lateral de búsqueda del Nav.

                        const countSideSearchChildNodes = asParentSearch.childNodes.length;
                        if (countSideSearchChildNodes > 1) {
                              this.render2.removeStyle(asIxvb8j5, "transform");
                              this.render2.setStyle(
                                    asIxvb8j5,
                                    "transform",
                                    "translateX(0px)"
                              );

                              this.removeOrAddSpecifiedClasses(
                                    asIx1cy8zhl,
                                    "x1o5hw5a xaeubzz",
                                    "addClass"
                              );

                              this.render2.removeStyle(asIx1cy8zhl, "transform");

                              this.render2.setStyle(
                                    asIx1cy8zhl,
                                    "transform",
                                    "translateX(0px)"
                              );

                              this.render2.removeChild(asParentSearch, asSideSearch);
                        }

                  // -- Borrar el elemento showMorenav del Nav.

                        const asMorenav = this.asMorenav.nativeElement;
                        const asIx78zum5 = this.asIx78zum5.nativeElement;
                        const countMoreChildNodes = asIx78zum5.childNodes.length;
                        if ( countMoreChildNodes > 1 ) {
                              this.render2.removeChild(
                                    asIx78zum5, 
                                    asMorenav
                              );
                        }
            });
      }


      // Destruye el servicio despues de resizar el ancho de la pantalla.
      ngOnDestroy() {
            this.resizeSubscription$.unsubscribe();
      }
}
