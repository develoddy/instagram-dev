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
  private screen : any = {
    small: 0,
    medium: 400,
    large: 800,
};

  constructor(
    public sanitizer: DomSanitizer,
    public scripts: ScriptsService,
  ) {
    //scripts.loadFiles(['responsive']);
    //this.cssUrl = '/assets/css/responsive.css';
    //this.cssUrl = '/assets/css/root.css';
  }

  ngOnInit() {
    //this.screenWidth = window.innerWidth;  
    //console.log(this.screenWidth);
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
    console.log("size=> " + size + " and " + "new => " + iw);
    // Aplicar la media Query en cada tamaño de la pantalla.
    this.mediaQuery(iw!);

  }

  public mediaQuery( iw:number ) {
    /*if (window.innerWidth <= 400) {
      this.renderMobileView();
    } else {
      this.renderDesktopView();
    }*/
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
