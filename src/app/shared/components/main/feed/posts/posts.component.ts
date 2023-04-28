import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnInit, Output, Renderer2, ViewChild, ViewChildren } from '@angular/core';

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
  
  public targetOverlay: Overlay | null;

	private targetElement: HTMLElement | null;

  /*@ViewChild('asProfileImageRef') asProfileImageRef:ElementRef;
  @ViewChild('asUsernameElementRef') asUsernameElementRef:ElementRef;
  @ViewChild('asChildrenDisplay') asChildrenDisplay:ElementRef;
  @Output() mouseOverEvent = new EventEmitter();*/


  public displayViewInfoProfile : boolean;
  constructor(private render2: Renderer2) {
    this.displayViewInfoProfile = false;
  }

  public clientY = 0;
  public clientX = 0;
  ngAfterViewInit() {}
  ngOnInit() {}

 

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















  mouseOver(hover:boolean) {
    /*const asProfileImageRef = this.asProfileImageRef.nativeElement;
    const coords2 = asProfileImageRef.getBoundingClientRect();
    console.log(asProfileImageRef);
    console.log("distancia al borde superior del viewport (coords1.top) .....: " + coords2.top);
    console.log("distancia al borde derecho del viewport (coords2.right)) ......: " + coords2.right);
    console.log("distancia al borde inferior del viewport (coords2.bottom) .....: " + coords2.bottom);
    console.log("distancia al borde izquierdo del viewport (oords1.left).....: " + coords2.left);
    console.log("ancho del elemento.....: " + coords2.width);
    console.log("alto del elemento.....: " + coords2.height);
    console.log("distancia del borde derecho del elemento al borde derecho del viewport ( coords2.right - coords2.width ).....: " + (coords2.right - coords2.width) );
    console.log("distancia del borde inferior del elemento al borde inferior del viewport ( coords2.bottom - coords2.height ).....: " + (coords2.bottom - coords2.height ) );
    console.log("distancia del borde superior del elemento al inicio del documento (cuando se ha hecho scroll) .....: " + (coords2.top + scrollY ) );
    this.clientX = 82;
    this.clientY =  582;
    this.displayViewInfoProfile = hover;*/
  }

  mouseOverUsername(hover:boolean) {
    /*const asUsernameElementRef = this.asUsernameElementRef.nativeElement;
    const coords2 = asUsernameElementRef.getBoundingClientRect();
    console.log(asUsernameElementRef);
    console.log("distancia al borde superior del viewport (coords1.top) .....: " + coords2.top);
    console.log("distancia al borde derecho del viewport (coords2.right)) ......: " + coords2.right);
    console.log("distancia al borde inferior del viewport (coords2.bottom) .....: " + coords2.bottom);
    console.log("distancia al borde izquierdo del viewport (oords1.left).....: " + coords2.left);
    console.log("ancho del elemento.....: " + coords2.width);
    console.log("alto del elemento.....: " + coords2.height);
    console.log("distancia del borde derecho del elemento al borde derecho del viewport ( coords2.right - coords2.width ).....: " + (coords2.right - coords2.width) );
    console.log("distancia del borde inferior del elemento al borde inferior del viewport ( coords2.bottom - coords2.height ).....: " + (coords2.bottom - coords2.height ) );
    console.log("distancia del borde superior del elemento al inicio del documento (cuando se ha hecho scroll) .....: " + (coords2.top + scrollY ) );

    this.clientX = 82;
    this.clientY = 582; //(coords2.top + scrollY) + 70;
    this.displayViewInfoProfile = hover;
    */
  }





















  /*
  @ViewChild("asParentPost") asParentPost: ElementRef;
  @ViewChild("asUsernameElementRef") asUsernameElementRef: ElementRef;
  */

  /*@ViewChild("asSuperParentPost") asSuperParentPost: ElementRef;
  @ViewChild("asParentDisplay") asParentDisplay: ElementRef;
  @ViewChild("asChildrenDisplay") asChildrenDisplay: ElementRef;
  @ViewChild("asProfileImageRef") asProfileImageRef: ElementRef;*/
  
 

  // ngAfterViewInit() {
  //   const asParentDisplay = this.asParentDisplay.nativeElement;
  //   const asChildrenDisplay = this.asChildrenDisplay.nativeElement;
  //   this.render2.removeChild(asParentDisplay, asChildrenDisplay);
  // }

  
  // public clienteX = 0;//82;
  // public clienteY= 0;//255;

  //mouseOver() {
    // transform: translate(82px, 255px);
    // const asSuperParentPost = this.asSuperParentPost.nativeElement;
    //  const asParentDisplay = this.asParentDisplay.nativeElement;
    //  const asChildrenDisplay = this.asChildrenDisplay.nativeElement;
    //  const asProfileImageRef = this.asProfileImageRef.nativeElement;
    // const coords1 = asSuperParentPost.getBoundingClientRect();
    // console.log(asSuperParentPost);
    // console.log("distancia al borde superior del viewport (coords1.top) .....: " + coords1.top);
    // console.log("distancia al borde derecho del viewport (coords1.right)) ......: " + coords1.right);
    // console.log("distancia al borde inferior del viewport (coords1.bottom) .....: " + coords1.bottom);
    // console.log("distancia al borde izquierdo del viewport (oords1.left).....: " + coords1.left);
    // console.log("ancho del elemento.....: " + coords1.width);
    // console.log("alto del elemento.....: " + coords1.height);
    // console.log("distancia del borde derecho del elemento al borde derecho del viewport ( coords1.right - coords1.width ).....: " + (coords1.right - coords1.width) );
    // console.log("distancia del borde inferior del elemento al borde inferior del viewport ( coords1.bottom - coords1.height ).....: " + (coords1.bottom - coords1.height ) );
    // console.log("distancia del borde superior del elemento al inicio del documento (cuando se ha hecho scroll) .....: " + (coords1.top + scrollY ) );
    // console.log("[==================================================]");
    
    // const coords2 = asProfileImageRef.getBoundingClientRect();
    // console.log(asProfileImageRef);
    // console.log("distancia al borde superior del viewport (coords1.top) .....: " + coords2.top);
    // console.log("distancia al borde derecho del viewport (coords2.right)) ......: " + coords2.right);
    // console.log("distancia al borde inferior del viewport (coords2.bottom) .....: " + coords2.bottom);
    // console.log("distancia al borde izquierdo del viewport (oords1.left).....: " + coords2.left);
    // console.log("ancho del elemento.....: " + coords2.width);
    // console.log("alto del elemento.....: " + coords2.height);
    // console.log("distancia del borde derecho del elemento al borde derecho del viewport ( coords2.right - coords2.width ).....: " + (coords2.right - coords2.width) );
    // console.log("distancia del borde inferior del elemento al borde inferior del viewport ( coords2.bottom - coords2.height ).....: " + (coords2.bottom - coords2.height ) );
    // console.log("distancia del borde superior del elemento al inicio del documento (cuando se ha hecho scroll) .....: " + (coords2.top + scrollY ) );

    //console.log("Distancia al borde izquierdo del SuperParentPost (coords2.left - coords1.left)....: " + (coords2.left - coords1.left));
    //this.clienteX = (coords2.left - coords1.left); //86
    //this.clienteY = coords2.clienteY; //(coords2.left - coords1.left)

    
    // this.clienteX = coords2.left;
    // this.clienteY = coords2.bottom;

    // console.log("-> " + this.clienteX);
    // console.log("| " + this.clienteY);
    
    // // add display
    // this.render2.setStyle(asChildrenDisplay, 'transform', 'translate('+this.clienteX+'px,'+this.clienteY+'px)');
    // this.render2.appendChild(asParentDisplay, asChildrenDisplay);
    
  //}

  // mouseLeave() {
    /*const asParentDisplay = this.asParentDisplay.nativeElement;
    const asChildrenDisplay = this.asChildrenDisplay.nativeElement;

    this.render2.removeChild(asParentDisplay, asChildrenDisplay);*/
  // }










  /*ngAfterViewInit() {

    const asSuperParentPost = this.asSuperParentPost.nativeElement;
    console.log(asSuperParentPost);
    const coords1 = asSuperParentPost.getBoundingClientRect();
    console.log("distancia al borde superior del viewport (coords1.top) .....: " + coords1.top);
    console.log("distancia al borde derecho del viewport (coords1.right)) ......: " + coords1.right);
    console.log("distancia al borde inferior del viewport (coords1.bottom) .....: " + coords1.bottom);
    console.log("distancia al borde izquierdo del viewport (oords1.left).....: " + coords1.left);
    console.log("ancho del elemento.....: " + coords1.width);
    console.log("alto del elemento.....: " + coords1.height);
    console.log("distancia del borde derecho del elemento al borde derecho del viewport ( coords1.right - coords1.width ).....: " + (coords1.right - coords1.width) );
    console.log("distancia del borde inferior del elemento al borde inferior del viewport ( coords1.bottom - coords1.height ).....: " + (coords1.bottom - coords1.height ) );
    console.log("distancia del borde superior del elemento al inicio del documento (cuando se ha hecho scroll) .....: " + (coords1.top + scrollY ) );
    console.log("[==================================================]");

    const asParentPost = this.asParentPost.nativeElement;
    console.log(asParentPost);
    const coords2 = asParentPost.getBoundingClientRect();
    console.log("distancia al borde superior del viewport.....: " + coords2.top);
    console.log("distancia al borde derecho del viewport......: " + coords2.right);
    console.log("distancia al borde inferior del viewport.....: " + coords2.bottom);
    console.log("distancia al borde izquierdo del viewport.....: " + coords2.left);
    
    console.log("ancho del elemento.....: " + coords2.width);
    console.log("alto del elemento.....: " + coords2.height);
    console.log("distancia del borde derecho del elemento al borde derecho del viewport ( coords2.right - coords2.width ).....: " + (coords2.right - coords2.width) );
    console.log("distancia del borde inferior del elemento al borde inferior del viewport ( coords2.bottom - coords2.height ).....: " + (coords2.bottom - coords2.height ) );
    console.log("Distancia al borde izquierdo del SuperParentPost (coords2.top + scrollY )....: " + (coords2.top + scrollY ));
    console.log("cuant espacio hay entre paren e hijo: " + (coords2.left - coords1.left));
    console.log("[==================================================]");

    const asProfileImageRef = this.asProfileImageRef.nativeElement;
    console.log(asProfileImageRef);
    const coords3 = asProfileImageRef.getBoundingClientRect();
    console.log("distancia al borde superior del viewport.....: " + coords3.top);
    console.log("distancia al borde derecho del viewport......: " + coords3.right);
    console.log("distancia al borde inferior del viewport.....: " + coords3.bottom);
    console.log("distancia al borde izquierdo del viewport.....: " + coords3.left);
    console.log("ancho del elemento.....: " + coords3.width);
    console.log("alto del elemento.....: " + coords3.height);
    console.log("distancia del borde derecho del elemento al borde derecho del viewport ( coords3.right - coords3.width ).....: " + (coords3.right - coords3.width) );
    console.log("distancia del borde inferior del elemento al borde inferior del viewport ( coords3.bottom - coords3.height ).....: " + (coords3.bottom - coords3.height ) );
    console.log("distancia del borde superior del elemento al inicio del documento (cuando se ha hecho scroll) .....: " + (coords3.top + scrollY ) );
    console.log("[==================================================]");

    const asParentInfoUser = this.asParentInfoUser.nativeElement;
    console.log(asParentInfoUser);
    const coords4 = asParentInfoUser.getBoundingClientRect();
    console.log("distancia al borde superior del viewport.....: " + coords4.top);
    console.log("distancia al borde derecho del viewport......: " + coords4.right);
    console.log("distancia al borde inferior del viewport.....: " + coords4.bottom);
    console.log("distancia al borde izquierdo del viewport.....: " + coords4.left);
    console.log("ancho del elemento.....: " + coords4.width);
    console.log("alto del elemento.....: " + coords4.height);
    console.log("distancia del borde derecho del elemento al borde derecho del viewport ( coords4.right - coords4.width ).....: " + (coords4.right - coords4.width) );
    console.log("distancia del borde inferior del elemento al borde inferior del viewport ( coords4.bottom - coords4.height ).....: " + (coords4.bottom - coords4.height ) );
    console.log("distancia del borde superior del elemento al inicio del documento (cuando se ha hecho scroll) .....: " + (coords4.top + scrollY ) );

    console.log("Distancia al borde izquierdo del SuperParentPost (coords4.left - coords1.left)....: " + (coords4.left - coords1.left));
    console.log("Distancia al borde izquierdo del SuperParentPost (coords4.left - coords1.left)....: " + (coords4.top - coords1.top));
    
  }*/


 




  
  //   mouseover
  //@HostListener('mouseover', ['$event']) onMouseHover(event:any) {
      // console.log(event.srcElement);
      // const {currentTarget: data, pageX, pageY} = event;
      // const coords = data.getBoundingClientRect();
      // console.log("distancia al borde superior del viewport.....: " + coords.top);
      // console.log("distancia al borde derecho del viewport......: " + coords.right);
      // console.log("distancia al borde inferior del viewport.....: " + coords.bottom);
      // console.log("distancia al borde izquierdo del viewport.....: " + coords.left);

      // console.log("ancho del elemento.....: " + coords.width);
      // console.log("alto del elemento.....: " + coords.height);

      // console.log("distancia del borde derecho del elemento al borde derecho del viewport.....: " + (coords.right - coords.width) );
      // console.log("distancia del borde inferior del elemento al borde inferior del viewport .....: " + (coords.bottom - coords.height ) );

      // console.log("distancia del borde superior del elemento al inicio del documento (cuando se ha hecho scroll) .....: " + (coords.top + scrollY ) );

      // console.log("[==================================================]");
      
      

      /*
      // distancia al borde superior del viewport
      coords.top
      // distancia al borde derecho del viewport
      coords.right
      // distancia al borde inferior del viewport
      coords.bottom
      // distancia al borde izquierdo del viewport
      coords.left

      // ancho del elemento                 
      coords.width
      // alto del elemento
      coords.height

      // distancia del borde derecho del elemento al borde derecho del viewport
      coords.right - coords.width
      // distancia del borde inferior del elemento al borde inferior del viewport 
      coords.bottom - coords.height 

      // distancia del borde superior del elemento al inicio del documento (cuando se ha hecho scroll)
      coords.top + scrollY 
      */
  //}







  // public clientX = 0; 
  // public clientY = 0;
  // @HostListener('mousemove', ['$event']) onMouseMove(event:any) {
  //   const {currentTarget: svg, pageX, pageY} = event;
  //   const coords = svg.getBoundingClientRect();
  //   console.log(coords);

  //   console.log("pageX - coords.x : " + (pageX - coords.x));
  //   console.log("pageY - coords.y : " + (pageY - coords.y));
  //   console.log("pageY + 61 : " + (pageY));
  //   this.clientX = 82;
  //   this.clientY = (pageY+53)-7;
  // }

  // @HostListener('mouseover') onMouseOver() { 
  //   console.log("hostlistener..");
    
  //   let part = this.asParentInfoUser.nativeElement 
  //   this.render2.setStyle(part, 'display', 'block'); 
  // }

  // showInfo(hover: boolean) {
  //   this.showViewInfo = hover;
  // }


  

  /*ngAfterViewInit() {
    this.setupAfterView();
  }

  setupAfterView() {
    const asParentInfoUser = this.asParentInfoUser.nativeElement;
    const asInfoUser = this.asInfoUser.nativeElement;
    this.tempAsInfoUser = asInfoUser;
     this.render2.removeChild(
          asParentInfoUser,  
          asInfoUser
    );
  }

  mouseenter(hover: boolean) {
    this.addInfoUser();
  }

  mouseleave(hover: boolean) {
    this.removeInfoUser();
  }

  addInfoUser() {
    const asParentInfoUser = this.asParentInfoUser.nativeElement;
    const asInfoUser = this.asInfoUser.nativeElement;
    let totalChildrenNodes = asParentInfoUser.childNodes.length;
    if ( totalChildrenNodes == 0 ) {
      this.render2.removeStyle(
        asInfoUser, 
        'transform'
      );
      this.render2.setStyle(
        asInfoUser, 
        'transform', 
        'translate('+this.clientX+'px, '+this.clientY+'px)'
      );
      this.render2.appendChild(
        asParentInfoUser, 
        this.tempAsInfoUser
      );
    } else {
      console.log("DEBUG: PostsComponent mouseEnter()-addInfoUser error..");
    }
  }

  removeInfoUser() {
    const asParentInfoUser = this.asParentInfoUser.nativeElement;
    const asInfoUser = this.asInfoUser.nativeElement;
    let totalChildrenNodes = asParentInfoUser.childNodes.length;
    if ( totalChildrenNodes != 0 ) {
      this.render2.removeChild(
        asParentInfoUser,  
        asInfoUser
      );
    } else {
      console.log("DEBUG: PostsComponent mouseleave() error..");
    }
  }*/
}
