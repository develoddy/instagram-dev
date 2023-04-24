import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
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
  private screen : any = {
    small: 0,
    medium: 400,
    large: 800,
  };

  @ViewChild('asParent') asParent: ElementRef;
  @ViewChild('asIx9f619') asIx9f619: ElementRef;
  @ViewChild('asIxvb8j5') asIxvb8j5: ElementRef;
  @ViewChild('asIx1cy8zhl') asIx1cy8zhl: ElementRef;
  @ViewChild('asIx2lah0s') asIx2lah0s: ElementRef;
  @ViewChild('asIxh8yej3') asIxh8yej3: ElementRef;
  @ViewChild('asIxl5mz7h') asIxl5mz7h: ElementRef;
  @ViewChild('as002') as002: ElementRef;
  @ViewChild('as003') as003: ElementRef;
  @ViewChild('as006') as006: ElementRef; 
  @ViewChild('as007') as007: ElementRef;

  public tempAsIx2lah0s: any;
  public tempAsIxh8yej3: any;
  public tempAsIxl5mz7h: any;
  public tempAsIxh8yej3ChildNodes: any;
  public arrCopyTempAsIxh8yej3ChildNodes: any[];
  public temp002:any; 
  public temp006:any;

  constructor(
    public sanitizer: DomSanitizer,
    public scripts: ScriptsService,
    private render2: Renderer2
  ) {
    //scripts.loadFiles(['responsive']);
    //this.cssUrl = '/assets/css/responsive.css';
    //this.cssUrl = '/assets/css/root.css';
  }

  ngAfterViewInit() {}

  ngOnInit() {
    this.setupView();
  }

  setupView() {
    this.resizeWindows();
  }

  /**
   * Detectar la redimenzion de la pantalla.
   * con un clear timeout. 
   */
  private resizeWindows() {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe(e => {
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
    for(let s in this.screen) {
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
  public mediaQuery( size: string, iw:number ) {
    switch ( size ) {
      case 'small':
        this.renderMobileView( iw );
        break;
      case 'medium':
          this.renderTabletView( iw );
          break;
      case 'large':
        this.renderDesktopView( iw );
        break;
      default: console.log("error..");
        break;
    }
  }

  /**
   * Se rederiza para aplicaciones moviles.
   * @param iw 
   */
  renderMobileView( iw:number ) {
    console.log('render mobile view : ' + iw);
    this.mobileView = true;
  }

  /**
    * Se renderiza para aplicaciones tablet.
    * 
    * Mover bloque de div.
    * guardando como copia lo que se borra para despues recuperarlo.
    * childNodes
    * parentNode
    * firstChild
    * lastchild
    * nextSibling
    * previousSibling
   * @param iw
   */
  renderTabletView( iw:number ) {
    const asParent    = this.asParent.nativeElement;
    const asIx9f619   = this.asIx9f619.nativeElement;
    const asIxvb8j5   = this.asIxvb8j5.nativeElement;
    const asIx1cy8zhl = this.asIx1cy8zhl.nativeElement;
    const asIx2lah0s  = this.asIx2lah0s.nativeElement;
    const asIxh8yej3  = this.asIxh8yej3.nativeElement;
    const asIxl5mz7h  = this.asIxl5mz7h.nativeElement;
    const as002       = this.as002.nativeElement;
    const as003       = this.as003.nativeElement;
    const as006       = this.as006.nativeElement;
    const as007       = this.as007.nativeElement;

    /**
     * Se modifica las clases del elemento padre para realizar 
     * un cambio en el nav vertifical.
     */
    if ( iw <= 767 ) {
      if( asParent.classList.contains('x1q0g3np') ) {
        // #asParent
        this.render2.addClass(asParent, 'xdt5ytf');
        this.render2.removeClass(asParent, 'x1q0g3np')
        
        // #asIx9f619
        this.removeOrAddSpecifiedClasses(asIx9f619, 'xg7h5cd xh8yej3 x1vjfegm x1ey2m1c x80663w x1jeouym x6w1myc', 'addClass');
        this.removeOrAddSpecifiedClasses(asIx9f619, 'xeq5yr9 x1dr59a3 x13vifvy x1n327nk', 'removeClass');

        // #asIxvb8j5
        this.removeOrAddSpecifiedClasses(asIxvb8j5, 'xvbhtw8 xh8yej3', 'addClass');
        this.removeOrAddSpecifiedClasses(asIxvb8j5, 'xvb8j5 x1vjfegm', 'removeClass');

        // #asIx1cy8zhl
        this.removeOrAddSpecifiedClasses(asIx1cy8zhl, 'xh8yej3 x1q0g3np x1n2onr6 xaw8158 xtuw4uo', 'addClass');
        this.removeOrAddSpecifiedClasses(asIx1cy8zhl, 'x1cy8zhl xdt5ytf x1gvbg2u x1y1aw1k xn6708d xx6bls6 x1ye3gou xvbhtw8 x1xgvd2v', 'removeClass');

        /**
         * Se modifica los children para ocultar el nav verticial
         * y se muetre en forma horizontal en el pie de la aplicatión.
         */
        if ( this.tempAsIx2lah0s || this.tempAsIxl5mz7h ) {
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
      if( asParent.classList.contains('xdt5ytf') ) {
        // asParent
        this.render2.removeClass(asParent, 'xdt5ytf')
        this.render2.addClass(asParent, 'x1q0g3np');

        // asIx9f619
        this.removeOrAddSpecifiedClasses(asIx9f619, 'xeq5yr9 x1dr59a3 x13vifvy x1n327nk xaw8158 xtuw4uo',  'addClass');
        this.removeOrAddSpecifiedClasses(asIx9f619, 'xg7h5cd xh8yej3 x1vjfegm x1ey2m1c x80663w x1jeouym x6w1myc', 'removeClass');

        // asIxvb8j5
        this.removeOrAddSpecifiedClasses(asIxvb8j5, 'xvb8j5 x1vjfegm', 'addClass');
        this.removeOrAddSpecifiedClasses(asIxvb8j5, 'xvbhtw8 xh8yej3', 'removeClass');

        // #asIx1cy8zhl
        this.removeOrAddSpecifiedClasses(asIx1cy8zhl, 'x1cy8zhl xdt5ytf x1gvbg2u x1y1aw1k xn6708d xx6bls6 x1ye3gou xvbhtw8 x1xgvd2v', 'addClass');
        this.removeOrAddSpecifiedClasses(asIx1cy8zhl, 'xh8yej3 x1q0g3np x1n2onr6 xaw8158 xtuw4uo', 'removeClass');

         /**
         * Se modifica los children para ocultar el nav verticial
         * y se muetre en forma horizontal en el pie de la aplicatión.
         */
        // add asIx2lah0s
        this.appendChilds(asIxh8yej3, asIx1cy8zhl);
        this.render2.appendChild(asIx1cy8zhl, asIx2lah0s);

        // add asIxh8yej3
        this.render2.insertBefore(asIxh8yej3, as002, as003 );
        this.render2.insertBefore(asIxh8yej3, as006, as007 );
        this.render2.appendChild(asIx1cy8zhl, asIxh8yej3);
        
        // add asIxl5mz7h
        this.render2.appendChild(asIx1cy8zhl, asIxl5mz7h);
      }
    }
  }

  /**
   * Se renderiza para aplicaciones desktop.
   * @param iw 
   */
  renderDesktopView( iw:number ) {
    console.log('render desktop view : ' + iw);
    this.mobileView = false;
  }

  /**
   * Se agrega o se borra varias clases de un elemento.
   * @param classes 
   * @param selector 
   * @param option 
   */
  private removeOrAddSpecifiedClasses(selector: any, classes: string, option: string ) {
    switch ( option ) {
      case 'addClass':
        classes.split(' ').forEach((className: string) => { 
          this.render2.addClass(selector, className); 
        });
        break;
      case 'removeClass':
        classes.split(' ').forEach((className: string) => { 
          this.render2.removeClass(selector, className); 
        });
        break;
      default: console.log('error..');
        break;
    }
  }

  /**
   * Esta función se encarga de agregar varios children en el 
   * elemento padre selecccionado
   * @param parenet 
   * @param children 
   */
  private appendChilds( parenet:any, children:any) {
    if ( children.childNodes.length > 0 ) {
      while (children.childNodes.length > 0) {
        this.render2.appendChild(parenet, children.childNodes[0]);
      }  
    } else {
      console.log("DEBUG: fuction appendChilds devuelve vacio..");  
    }
  }

  // Destrucir el servicio despues de resizar el ancho de la pantalla
  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }
}
