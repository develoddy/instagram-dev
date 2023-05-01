import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { MainComponent } from '@modules/usecases/components/main/main.component';

interface Overlay {
	left: number;
	height: number;
	top: number;
	width: number;
}

var TRACER_CLASS = "-+-+-+-+-+-+-+-target-element-+-+-+-+-+-+-+-";

@Component({
  selector: 'app-posts',
  host: {
		"(document:click)": "handleClick( $event )",
		"(window:keydown.Esc)": "reset()",
		"(window:resize)": "reset()"
	},
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @ViewChild(MainComponent) child:MainComponent;
  
  public targetOverlay: Overlay | null;
	private targetElement: HTMLElement | null;
  public displayViewInfoProfile : boolean;
  public clientY = 0;
  public clientX = 0;

  constructor(
    private render2: Renderer2
  ) {
    this.displayViewInfoProfile = false;
  }

  ngAfterViewInit() {
    console.log("DEBUG: Post.component load..");
    
     console.log(this.child.prueba);
      
  }
  ngOnInit() {
    console.log(this.child.prueba);
  }

  // I handle the mouse click on the document.
	public handleClick( event: MouseEvent ) : void {

		// If we have an existing element, remove the tracer class.
		// --
		// NOTE: This class serves no functional purpose other than to indicate where in
		// the DOM tree the selected target lives. This will show up in the Elements pane
		// of the Chrome Dev Tools, and will clearly illustrate the journey of the
		// selection as the user continues to click within a single DOM branch.
		if ( this.targetElement ) {
			this.targetElement.classList.remove( TRACER_CLASS );
		}

		this.targetElement = this.getNextTarget( event );
		this.targetOverlay = null;
		if ( this.targetElement ) {
			this.targetElement.classList.add( TRACER_CLASS );
			// The bounding client rectangle contains the FIXED location of the given
			// element within the browser's viewport.
			var rect = this.targetElement.getBoundingClientRect();
			this.targetOverlay = {
				height: rect.height,
				left: rect.left,
				top: rect.top,
				width: rect.width
			};
		}
	}

  // I reset the state, clearing the target element and overlay.
	public reset() : void {
		this.targetElement = null;
		this.targetOverlay = null;
	}

  // ---
	// PRIVATE METHODS.
	// ---

	// I get the next target element based on the given mouse click event.
	private getNextTarget( event: MouseEvent ) : HTMLElement | null {
		var target = ( event.target as HTMLElement );

		// If we have an existing target element and the user clicked below the target
		// element but within the same DOM branch, let's move up one level in the DOM
		// tree.
		if ( this.targetElement && this.targetElement.contains( target ) ) {
			return( this.targetElement.parentElement || null );
		}
		// Otherwise, just use the user's click target.
		return( target );
	}

  /**
   * Esta funcion se encarga de mostrar la ventana 
   * de información del usuario.
   * @param event 
   */
  mouseOver( event:any ) {
    const ref = event.ref.nativeElement;
    switch ( event.option ) {
      case 'img-profile-header':
        this.showInfoProfile(
          event.hover, 
          82, 
          event.ref, 
          60);
        break;

      case 'span-username-header':
        this.showInfoProfile(
          event.hover, 
          124, 
          event.ref, 
          50);
        break;

      case 'span-username-content':
        this.showInfoProfile(
          event.hover, 
          82, 
          event.ref, 
          50);
        break;
      default: console.log("DEBUG: error mouseOver..");
        break;
    }
  }

  showInfoProfile( hover:boolean, clientX:number, objcRef:ElementRef, extraTop: number ) {
    const ref = objcRef.nativeElement;
    const coords = ref.getBoundingClientRect();
    console.log("distancia al borde superior del viewport (coords.top) .....: " + coords.top);
    console.log("distancia al borde derecho del viewport (coords.right)) ......: " + coords.right);
    console.log("distancia al borde inferior del viewport (coords.bottom) .....: " + coords.bottom);
    console.log("distancia al borde izquierdo del viewport (oords.left).....: " + coords.left);
    console.log("coords.width.....: " + coords.width);
    console.log("coords.height.....: " + coords.height);
    console.log("coords.x.....: " + coords.x);
    console.log("coords.y.....: " + coords.y);
    console.log("coords.bottom .....: " + coords.bottom);
    console.log("coords.top .....: " + coords.top);
    console.log("distancia del borde derecho del elemento al borde derecho del viewport ( coords.right - coords2.width ).....: " + (coords.right - coords.width) );
    console.log("distancia del borde inferior del elemento al borde inferior del viewport ( coords.bottom - coords.height ).....: " + (coords.bottom - coords.height ) );
    console.log("scrollY: " + scrollY);
    // // transform: translate(694px, 1340px) translate(0px, -100%);
    this.clientX = clientX;
    this.clientY = (scrollY + coords.bottom) + extraTop;
    this.displayViewInfoProfile = hover;
  }

  mouseOverDisplay(hover:boolean) {
    this.displayViewInfoProfile = hover;
  }
}
