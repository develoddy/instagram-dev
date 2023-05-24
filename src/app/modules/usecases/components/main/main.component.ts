import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { ScriptsService } from '@data/services/api/scripts.service';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { FeedComponent } from '../feed/feed.component';
import { FiltroService } from '@data/services/api/filtro.service';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    style({ opacity: 1 }),
    animate('300ms', style({ opacity: 0, transform: 'none' })),
  ]),
]);

const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateX(-400px)' }),
        stagger(
          '-30ms',
          animate(
            '700ms cubic-bezier(0.35, 0, 0.25, 1)',
            style({ opacity: 1, transform: 'none' })
          )
        ),
      ],
      { optional: true }
    ),
    query(':leave', animate('100ms', style({ opacity: 0 })), {
      optional: true,
    }),
  ]),
]);

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [fadeAnimation, listAnimation],
})
export class MainComponent implements OnInit {
  currentRoute: string;
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
  @ViewChild('asParentSearch') asParentSearch: ElementRef;
  @ViewChild('asSideSearch') asSideSearch: ElementRef;
  @ViewChild('asParentMain') asParentMain: ElementRef;
  @ViewChild('asMorenav') asMorenav: ElementRef;
  @ViewChild('asIx78zum5') asIx78zum5: ElementRef;
  @ViewChild('asMoreBoddy') asMoreBoddy: ElementRef;
  @ViewChild('asParentContent') asParentContent: ElementRef;
  @ViewChild('asIx1ja2u2z') asIx1ja2u2z: ElementRef;
  @ViewChild('asIjx87ck') asIjx87ck: ElementRef;

  public iconInstagram: boolean;
  public cssUrl: string;
  public tempAsIx2lah0s: any;
  public tempAsIxh8yej3: any;
  public tempAsIxl5mz7h: any;
  public tempAsIxh8yej3ChildNodes: any;
  public arrCopyTempAsIxh8yej3ChildNodes: any[];
  public temp002: any;
  public temp006: any;
  public tempAsSideSearch: any;
  public tempAsMorenav: any;
  public resizeId: any;
  private screen: any = { small: 0, medium: 400, large: 800 };
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  mobileView = false;
  public displayShowMore: boolean;
  public displaySideSearch = false;
  public displaySideNotification = false;
  public overOptionNavHome: boolean;
  public overOptionNavSearch: boolean;
  public overOptionNavExplore: boolean;
  public overOptionNavReels: boolean;
  public overOptionNavMessage: boolean;
  public overOptionNavNotification: boolean;
  public overOptionNavCreate: boolean;
  public overOptionNavProfile: boolean;
  public overOptionNavMore: boolean;
  public parentMain: boolean;
  public username: string = '';
  public home: boolean;
  public search: boolean;
  public explore: boolean;
  public reels: boolean;
  public message: boolean;
  public notification: boolean;
  public create: boolean;
  public profile: boolean;
  public more: boolean;
  public viewStories: boolean;

  constructor(
    public sanitizer: DomSanitizer,
    public scripts: ScriptsService,
    private render2: Renderer2,
    private router: Router,
    public filter: FiltroService
  ) {
    this.initVar();
  }

  private initVar() {
    this.iconInstagram = false;
    this.overOptionNavHome = false;
    this.overOptionNavSearch = false;
    this.overOptionNavExplore = false;
    this.overOptionNavReels = false;
    this.overOptionNavMessage = false;
    this.overOptionNavNotification = false;
    this.overOptionNavCreate = false;
    this.overOptionNavProfile = false;
    this.overOptionNavMore = false;
    this.parentMain = false;
    this.displayShowMore = false;
    this.home = false;
    this.search = false;
    this.explore = false;
    this.reels = false;
    this.message = false;
    this.notification = false;
    this.create = false;
    this.profile = false;
    this.more = false;
    this.viewStories = false;
  }

  ngAfterViewInit() {
    this.setupAfterView();
    if (!this.viewStories) {
      this.removeSidebarByGlobalClick();
    }
  }

  ngOnInit() {
    this.setupView();
  }

  public closeSwipeModalStories(event: any) {
    this.viewStories = false;
    this.router.navigate(['']);
  }

  private setStories(username: string, idStories: string) {
    // Vamos a hacer pruebas para ver si existe el usuario con su historia.
    if (username == 'rebeca' && idStories == '3099938179339172451') {
      this.viewStories = true;
    } else {
      // no existe usuario storie
    }
  }

  public manageRouter(currentRoute: string) {
    let path = currentRoute.split('/');
    // View Stories desde main.
    if (path[1] == 'stories') {
      this.setStories(path[2], path[3]);
    }
  }

  private getRouter() {
    // este metodo detecta path de url sin recargar la pagina.
    this.currentRoute = 'Demo';
    this.resizeSubscription$ = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if (this.currentRoute == '/') {
          this.viewStories = false;
        } else {
          this.manageRouter(this.currentRoute);
        }
      }
    });

    //Este metodo detecta path de url recargando la pagina.
    this.currentRoute = document.location.pathname;
    // no r
    this.manageRouter(this.currentRoute);
  }

  private setupView() {
    this.resizeWindows();
    this.loadWindows();
    this.getRouter();
  }

  /**
   * Se inicializa y se prepara los elementos.
   * Se empieza a borrar todos elementos que no son usados cuando arranca la aplicación
   * routerLink]="['search']"
   * @param
   * @returns
   */
  setupAfterView() {}

  // Redimensionar el ancho de la pantalla.
  private resizeWindows() {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe((e) => {
      clearTimeout(this.resizeId);
      this.resizeId = setTimeout(() => {
        this.resizeHandler();
      }, 10);
    });
  }

  /**
   * Controlador de cambio de tamaño del ancho de la pantalla.
   * Se obtiene el ancho de la pantalla con windows.innerWidth.
   * Tambien se determina el tamaño y el ancho con nombre.
   * @param
   * @return
   */
  public resizeHandler() {
    const screenWidth = window.innerWidth;
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
      case 'small':
        this.renderMobileView(iw);
        break;
      case 'medium':
        this.renderTabletView(iw);
        break;
      case 'large':
        this.renderDesktopView(iw);
        break;
      default:
        // no r
        break;
    }
  }

  /**
   * Se renderiza para aplicaciones moviles.
   * @param iw
   */
  renderMobileView(iw: number) {
    // no r
    this.render(iw);
    this.mobileView = true;
  }

  /**
   * Se renderiza para aplicaciones tablet.
   * @param iw
   */
  renderTabletView(iw: number) {
    // no r
    this.render(iw);
  }

  /**
   * Se renderiza para aplicaciones desktop.
   * @param iw
   */
  renderDesktopView(iw: number) {
    this.mobileView = false;

    if (iw < 1264) {
      this.iconInstagram = true;
    }

    if (iw > 1264) {
      this.iconInstagram = false;
    }
  }

  loadWindows() {
    const iw = window.innerWidth;
    if (iw < 1264) {
      this.iconInstagram = true;
    }

    if (iw > 1264) {
      this.iconInstagram = false;
    }
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

    // Se modifica las clases del elemento padre para realizar un cambio en el nav vertifical.
    if (iw <= 767) {
      if (asParent.classList.contains('x1q0g3np')) {
        this.render2.addClass(asParent, 'xdt5ytf');
        this.render2.removeClass(asParent, 'x1q0g3np');

        this.removeOrAddSpecifiedClasses(
          asIx9f619,
          'xg7h5cd xh8yej3 x1vjfegm x1ey2m1c x80663w x1jeouym x6w1myc',
          'addClass'
        );
        this.removeOrAddSpecifiedClasses(
          asIx9f619,
          'xeq5yr9 x1dr59a3 x13vifvy x1n327nk',
          'removeClass'
        );

        this.removeOrAddSpecifiedClasses(
          asIxvb8j5,
          'xvbhtw8 xh8yej3',
          'addClass'
        );
        this.removeOrAddSpecifiedClasses(
          asIxvb8j5,
          'xvb8j5 x1vjfegm',
          'removeClass'
        );

        this.removeOrAddSpecifiedClasses(
          asIx1cy8zhl,
          'xh8yej3 x1q0g3np x1n2onr6 xaw8158 xtuw4uo',
          'addClass'
        );
        this.removeOrAddSpecifiedClasses(
          asIx1cy8zhl,
          'x1cy8zhl xdt5ytf x1gvbg2u x1y1aw1k xn6708d xx6bls6 x1ye3gou xvbhtw8 x1xgvd2v',
          'removeClass'
        );

        // Se configura el Nav para mostrarse en el pie de la aplicación
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
      if (asParent.classList.contains('xdt5ytf')) {
        this.render2.removeClass(asParent, 'xdt5ytf');
        this.render2.addClass(asParent, 'x1q0g3np');

        this.removeOrAddSpecifiedClasses(
          asIx9f619,
          'xeq5yr9 x1dr59a3 x13vifvy x1n327nk xaw8158 xtuw4uo',
          'addClass'
        );
        this.removeOrAddSpecifiedClasses(
          asIx9f619,
          'xg7h5cd xh8yej3 x1vjfegm x1ey2m1c x80663w x1jeouym x6w1myc',
          'removeClass'
        );

        this.removeOrAddSpecifiedClasses(
          asIxvb8j5,
          'xvb8j5 x1vjfegm',
          'addClass'
        );
        this.removeOrAddSpecifiedClasses(
          asIxvb8j5,
          'xvbhtw8 xh8yej3',
          'removeClass'
        );

        this.removeOrAddSpecifiedClasses(
          asIx1cy8zhl,
          'x1cy8zhl xdt5ytf x1gvbg2u x1y1aw1k xn6708d xx6bls6 x1ye3gou xvbhtw8 x1xgvd2v',
          'addClass'
        );
        this.removeOrAddSpecifiedClasses(
          asIx1cy8zhl,
          'xh8yej3 x1q0g3np x1n2onr6 xaw8158 xtuw4uo',
          'removeClass'
        );

        // Se configura el Nav para mostrarse de forma vertical enla aplicación.
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
      default:
        // no r
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
    if (children.childNodes.length > 0) {
      while (children.childNodes.length > 0) {
        this.render2.appendChild(parenet, children.childNodes[0]);
      }
    } else {
      // no r
    }
  }

  // Agrega o borra la barra lateral de la búsqueda en el Nav.
  public addOrRemoveSideSearchWindow() {
    this.changeSearchIconNav();
    this.displaySideSearch == false
      ? this.addSideSearch(2)
      : this.removeSideSearch(2);
    // Se comprueba si está abierto el elemento Show More.
    if (this.displayShowMore) {
      this.displayShowMore = false;
    }
  }

  public sidebarNotification() {
    //this.displaySideNotification = true;
    this.changeNotificationIconNav();
    this.displaySideNotification == false
      ? this.addSideSearch(6)
      : this.removeSideSearch(6);
  }

  // Agrega el elemento de la barra de búsqueda en el Nav.
  public translateNotiX = 0;
  private addSideSearch(optionNav: number) {
    const asIxvb8j5 = this.asIxvb8j5.nativeElement;
    const asIx1cy8zhl = this.asIx1cy8zhl.nativeElement;
    this.render2.removeStyle(asIxvb8j5, 'transform');
    this.render2.setStyle(asIxvb8j5, 'transform', 'translateX(-263px)');

    this.removeOrAddSpecifiedClasses(
      asIx1cy8zhl,
      'x1o5hw5a xaeubzz',
      'removeClass'
    );
    this.render2.removeStyle(asIx1cy8zhl, 'transform');
    this.render2.setStyle(asIx1cy8zhl, 'transform', 'translateX(263px)');

    // Activa sidebar search.
    if (optionNav == 2) {
      this.displaySideSearch = true; /*!this.displaySideSearch;*/
      if (this.displaySideNotification) {
        this.displaySideNotification = false;
      }

      this.iconInstagram = true;
    }

    // Activa sidebar notification.
    if (optionNav == 6) {
      this.displaySideNotification = !this.displaySideNotification;
      if (this.displaySideSearch) {
        this.displaySideSearch = false;
      }

      this.iconInstagram = true;
    }
  }

  // Bora el elemento de la barra de búsqueda en el Nav.
  private removeSideSearch(optionNav: number) {
    const asIxvb8j5 = this.asIxvb8j5.nativeElement;
    const asIx1cy8zhl = this.asIx1cy8zhl.nativeElement;
    this.render2.removeStyle(asIxvb8j5, 'transform');
    this.render2.setStyle(asIxvb8j5, 'transform', 'translateX(0px)');

    this.removeOrAddSpecifiedClasses(
      asIx1cy8zhl,
      'x1o5hw5a xaeubzz',
      'addClass'
    );
    this.render2.removeStyle(asIx1cy8zhl, 'transform');
    this.render2.setStyle(asIx1cy8zhl, 'transform', 'translateX(0px)');

    if (window.innerWidth <= 767) {
      this.iconInstagram = false;
    }

    if (window.innerWidth > 1160) {
      this.iconInstagram = false;
    }

    // Desactiva sidebar search.
    if (optionNav == 2) {
      this.displaySideSearch = !this.displaySideSearch;
    }

    // Desactiva sidebar notification.
    if (optionNav == 6) {
      this.displaySideNotification = !this.displaySideNotification;
    }
  }

  // Agrega o borra el elemento Show More en el Nav.
  public clientX = 0;
  public clientY = 0;
  public addOrRemoveMoreNav() {
    this.changeMoreIconNav();
    const asIxl5mz7h = this.asIxl5mz7h.nativeElement;
    const coords = asIxl5mz7h.getBoundingClientRect();
    this.clientX = coords.left;
    this.clientY = coords.top - 440;
    this.displayShowMore = !this.displayShowMore;
  }

  /**
   * Esta función detecta los click en el componente Main, y
   * se aplica la logica acorde a lo que el usuario va
   * abriendo o cerrando el sidebar de búsqueda en la vista del Nav.
   */
  private removeSidebarByGlobalClick() {
    console.log('xxxx');

    const asParentMain = this.asParentMain.nativeElement;
    const asParentSearch = this.asParentSearch.nativeElement;
    const asIxvb8j5 = this.asIxvb8j5.nativeElement;
    const asIx1cy8zhl = this.asIx1cy8zhl.nativeElement;

    // Detectar eventos o click en la parte del component Main.
    this.render2.listen(asParentMain, 'click', (event) => {
      // Borra el elemento de la barra lateral de búsqueda del Nav.
      const countSideSearchChildNodes = asParentSearch.childNodes.length;
      if (countSideSearchChildNodes > 1) {
        this.render2.removeStyle(asIxvb8j5, 'transform');
        this.render2.setStyle(asIxvb8j5, 'transform', 'translateX(0px)');

        this.removeOrAddSpecifiedClasses(
          asIx1cy8zhl,
          'x1o5hw5a xaeubzz',
          'addClass'
        );

        this.render2.removeStyle(asIx1cy8zhl, 'transform');

        this.render2.setStyle(asIx1cy8zhl, 'transform', 'translateX(0px)');
        //this.changeSearchIconNav();
        this.displaySideSearch = false;
        this.displaySideNotification = false;
        if (window.innerWidth <= 767) {
          this.iconInstagram = false;
        }
        if (window.innerWidth > 1160) {
          this.iconInstagram = false;
        }
      }
    });
  }

  /**
   * Esta función se encarga de activar el hover en
   * cada elemento del nav vertical.
   * @param hover
   * @param option
   */
  public mouseOverOptionNav(hover: boolean, option: string) {
    switch (option) {
      case 'home':
        this.overOptionNavHome = hover;
        break;
      case 'search':
        this.overOptionNavSearch = hover;
        break;
      case 'explore':
        this.overOptionNavExplore = hover;
        break;
      case 'reels':
        this.overOptionNavReels = hover;
        break;
      case 'message':
        this.overOptionNavMessage = hover;
        break;
      case 'notification':
        this.overOptionNavNotification = hover;
        break;
      case 'create':
        this.overOptionNavCreate = hover;
        break;
      case 'profile':
        this.overOptionNavProfile = hover;
        break;
      case 'more':
        this.overOptionNavMore = hover;
        break;
      default:
        break;
    }
  }

  /**
   * Mostrar la ventana de la información del usuario.
   * @param hover
   */
  public mouseOverInfoProfile(hover: boolean) {
    this.filter.mouseOverHideInfoProfile(hover);
  }

  public gotoProfile(username: string) {
    this.username = username;
    this.router.navigate([this.username]);
    this.displaySideSearch == true
      ? this.removeSideSearch(2)
      : this.addSideSearch(2);
  }

  public changeHomeIconNav() {
    this.home = !this.home;
    this.search = false;
    this.explore = false;
    this.reels = false;
    this.message = false;
    this.notification = false;
    this.create = false;
    this.profile = false;
    this.more = false;
  }

  public changeSearchIconNav() {
    this.home = false;
    this.search = !this.search;
    this.explore = false;
    this.reels = false;
    this.message = false;
    this.notification = false;
    this.create = false;
    this.profile = false;
    this.more = false;
  }

  public changeExploreIconNav() {
    this.home = false;
    this.search = false;
    this.explore = !this.explore;
    this.reels = false;
    this.message = false;
    this.notification = false;
    this.create = false;
    this.profile = false;
    this.more = false;
  }

  public changeReelsIconNav() {
    this.home = false;
    this.search = false;
    this.explore = false;
    this.reels = !this.reels;
    this.message = false;
    this.notification = false;
    this.create = false;
    this.profile = false;
    this.more = false;
  }

  public changeMessageIconNav() {
    this.home = false;
    this.search = false;
    this.explore = false;
    this.reels = false;
    this.message = !this.message;
    this.notification = false;
    this.create = false;
    this.profile = false;
    this.more = false;
  }

  public changeNotificationIconNav() {
    this.home = false;
    this.search = false;
    this.explore = false;
    this.reels = false;
    this.message = false;
    this.notification = !this.notification;
    this.create = false;
    this.profile = false;
    this.more = false;
  }

  public changeCreateIconNav() {
    this.home = false;
    this.search = false;
    this.explore = false;
    this.reels = false;
    this.message = false;
    this.notification = false;
    this.create = !this.create;
    this.profile = false;
    this.more = false;
  }

  public changeProfileIconNav() {
    this.home = false;
    this.search = false;
    this.explore = false;
    this.reels = false;
    this.message = false;
    this.notification = false;
    this.create = false;
    this.profile = !this.profile;
    this.more = false;
  }

  public changeMoreIconNav() {
    this.home = false;
    this.search = false;
    this.explore = false;
    this.reels = false;
    this.message = false;
    this.notification = false;
    this.create = false;
    this.profile = false;
    this.more = !this.more;
  }

  // Destruye el servicio despues de Redimensionar el ancho de la pantalla.
  ngOnDestroy() {
    this.resizeSubscription$.unsubscribe();
  }
}
