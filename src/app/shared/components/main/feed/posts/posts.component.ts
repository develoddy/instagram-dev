import { Component, ElementRef, HostBinding, HostListener, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  @ViewChild("asParentInfoUser") asParentInfoUser: ElementRef;
  @ViewChild("asInfoUser") asInfoUser: ElementRef;
  @ViewChild("asUsernameElementRef") asUsernameElementRef: ElementRef;
  
  public tempAsInfoUser:any;

  @Input('mouse') message : string = "Default message"; 
  constructor(private render2: Renderer2) {}

  ngAfterViewInit() {
    this.setupAfterView();
  }

  
  setupAfterView() {
    // Remove Ventana de información del usuario.
    const asParentInfoUser = this.asParentInfoUser.nativeElement;
    const asInfoUser = this.asInfoUser.nativeElement;
    this.tempAsInfoUser = asInfoUser;
     this.render2.removeChild(
          asParentInfoUser,  
          asInfoUser
    );
  }


  // transform: translate(127px, 231px)
  public clientX = 0; 
  public clientY = 0;
  @HostListener('mousemove', ['$event']) onMouseMove(event:any) {

    const {currentTarget: svg, pageX, pageY} = event;
    const coords = svg.getBoundingClientRect();
    console.log(coords);
    console.log("Posición client del ratón\nBottom: " + coords.bottom + "\nHeight: " + coords.height);
    console.log("Posición client del ratón\npageX: " + pageX + "\npageY: " + pageY);
    console.log("pageX - coords.x : " + (pageX - coords.x));
    console.log("pageY - coords.y : " + (pageY - coords.y));
    console.log("pageY + 61 : " + (pageY));
    this.clientX = 82;
    this.clientY = (pageY+53)-7;
  }

  // add info user
  mouseenter() {
    this.addInfoUser();
  }

  // remove info user
  mouseleave() {
   this.removeInfoUser();
  }



  // ---- Remove and Add ---
  addInfoUser() {
    const asParentInfoUser = this.asParentInfoUser.nativeElement;
    const asInfoUser = this.asInfoUser.nativeElement;

    let totalChildrenNodes = asParentInfoUser.childNodes.length;
    if ( totalChildrenNodes == 0 ) {
      this.render2.removeStyle(asInfoUser, 'transform');
      this.render2.setStyle(asInfoUser, 'transform', 'translate('+this.clientX+'px, '+this.clientY+'px)')
      // this.render2.setStyle(asInfoUser, 'transform', 'translate('+this.clientX+'px, 231px)');
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
  }
}
