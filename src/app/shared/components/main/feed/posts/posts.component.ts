import { Component, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  
  // @ViewChild("asInfoUser") asInfoUser: ElementRef;
  
  
  @ViewChild("asSuperParentPost") asSuperParentPost: ElementRef;
  @ViewChild("asParentPost") asParentPost: ElementRef;
  @ViewChild("asUsernameElementRef") asUsernameElementRef: ElementRef;
  @ViewChild("asProfileImageRef") asProfileImageRef: ElementRef;
  @ViewChild("asParentInfoUser") asParentInfoUser: ElementRef;
  

  public display: boolean;
  public pageX = 0;
  public pageY = 0;

  constructor(private render2: Renderer2) {
    this.display = false;
  }

  ngAfterViewInit() {

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
    
  }


  ngOnInit() {}




  
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



  mouseenter(hover: boolean) {
    
    //const asParentInfoUser = this.asParentInfoUser.nativeElement; 
    //const asInfoUser = this.asInfoUser.nativeElement;
    
    // if( hover ) {
    //   this.display = hover;
      
    // } else {
    //   this.display = !hover;
    // }

    //this.render2.setStyle(asInfoUser,  'transform', 'translate(82px, '+this.pageY+'px)');
  }

  removeDisplay(hover:boolean) {
    this.display = hover;
  }






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
