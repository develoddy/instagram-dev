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

  constructor(
    public sanitizer: DomSanitizer,
    public scripts: ScriptsService,
    private render2: Renderer2
  ) {
    //scripts.loadFiles(['responsive']);
    //this.cssUrl = '/assets/css/responsive.css';
    //this.cssUrl = '/assets/css/root.css';
  }

  ngAfterViewInit() {
    
  }

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
      }, 300);
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
   * @param iw
   */
  renderTabletView( iw:number ) {
    const asParent = this.asParent.nativeElement;
    const asIx9f619 = this.asIx9f619.nativeElement; 

    if ( iw <= 767 ) {
      /**
       * Se modifica las clases del elemento padre para realizar 
       * un cambio en el nav vertifical.
       */
      if( asParent.classList.contains('x9f619') ) {
        this.render2.removeClass(asParent, 'x1q0g3np')
        this.render2.addClass(asParent, 'xdt5ytf');
        
        this.removeOrAddSpecifiedClasses('xg7h5cd xh8yej3 x1vjfegm x1ey2m1c x80663w x1jeouym x6w1myc', asIx9f619, 'addClass');
        this.removeOrAddSpecifiedClasses('xeq5yr9 x1dr59a3 x13vifvy x1n327nk', asIx9f619, 'removeClass');
      } 

    } else {
      if( asParent.classList.contains('x9f619') ) {
        this.render2.removeClass(asParent, 'xdt5ytf')
        this.render2.addClass(asParent, 'x1q0g3np');

        this.removeOrAddSpecifiedClasses('xeq5yr9 x1dr59a3 x13vifvy x1n327nk xaw8158 xtuw4uo', asIx9f619, 'addClass');
        this.removeOrAddSpecifiedClasses('xg7h5cd xh8yej3 x1vjfegm x1ey2m1c x80663w x1jeouym x6w1myc', asIx9f619, 'removeClass');
      }
    }
    this.mobileView = true;
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
  private removeOrAddSpecifiedClasses( classes: string, selector: any, option: string ) {
    switch ( option ) {
      case 'addClass':
        classes.split(' ').forEach((className: string) => { this.render2.addClass(selector, className); });
        break;
      case 'removeClass':
        classes.split(' ').forEach((className: string) => { this.render2.removeClass(selector, className); });
        break;
      default: console.log('error..');
        break;
    }
  }

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }
}
