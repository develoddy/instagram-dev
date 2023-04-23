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
   * ç
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
   * @description Controlador de cambio de tamaño del 
   * width de la pantalla.
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
    console.log('render tablet view : ' + iw);
    if ( iw <= 767 ) {
      const asParent = this.asParent.nativeElement;
      if(asParent.classList.contains('x9f619')) {
        
      }
      
      
      //this.render2.setStyle(rx9f619, 'color', 'red');
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

  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }
}
