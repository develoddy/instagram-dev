import { Component, ElementRef, HostBinding, HostListener, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  /*@ViewChild("asParentInfoUser") asParentInfoUser: ElementRef;
  @ViewChild("asInfoUser") asInfoUser: ElementRef;
  @ViewChild("asUsernameElementRef") asUsernameElementRef: ElementRef;*/

  public showWindowsInfo: boolean;
  
  public tempAsInfoUser:any;

  constructor(private render2: Renderer2) {
    this.showWindowsInfo = false;
  }

  ngAfterViewInit() {
    //this.setupAfterView();
  }

  showImg(hover: boolean) {
    this.showWindowsInfo = hover;
  }

  
  /*setupAfterView() {
    const asParentInfoUser = this.asParentInfoUser.nativeElement;
    const asInfoUser = this.asInfoUser.nativeElement;
    this.tempAsInfoUser = asInfoUser;
     this.render2.removeChild(
          asParentInfoUser,  
          asInfoUser
    );
  }*/

  // public clientX = 0; 
  // public clientY = 0;
  // @HostListener('mousemove', ['$event']) onMouseMove(event:any) {
  //   const {currentTarget: svg, pageX, pageY} = event;
  //   const coords = svg.getBoundingClientRect();
  //   console.log(coords);
  //   console.log("Posición client del ratón\npageX: " + pageX + "\npageY: " + pageY);
  //   console.log("pageX - coords.x : " + (pageX - coords.x));
  //   console.log("pageY - coords.y : " + (pageY - coords.y));
  //   console.log("pageY + 61 : " + (pageY));
  //   this.clientX = 82;
  //   this.clientY = (pageY+53)-7;
  // }

  // add info user
  mouseenter() {
    //this.addInfoUser();
  }

  // remove info user
  mouseleave() {
    //this.removeInfoUser();
  }



  // add info user
  addInfoUser() {
    // const asParentInfoUser = this.asParentInfoUser.nativeElement;
    // const asInfoUser = this.asInfoUser.nativeElement;

    // let totalChildrenNodes = asParentInfoUser.childNodes.length;
    // if ( totalChildrenNodes == 0 ) {
    //   this.render2.removeStyle(
    //     asInfoUser, 
    //     'transform'
    //   );
    //   this.render2.setStyle(
    //     asInfoUser, 
    //     'transform', 
    //     'translate('+this.clientX+'px, '+this.clientY+'px)'
    //   );
    //   this.render2.appendChild(
    //     asParentInfoUser, 
    //     this.tempAsInfoUser
    //   );
    // } else {
    //   console.log("DEBUG: PostsComponent mouseEnter()-addInfoUser error..");
    // }
  }

  // remove info user
  removeInfoUser() {
    // const asParentInfoUser = this.asParentInfoUser.nativeElement;
    // const asInfoUser = this.asInfoUser.nativeElement;

    // let totalChildrenNodes = asParentInfoUser.childNodes.length;
    // if ( totalChildrenNodes != 0 ) {
    //   this.render2.removeChild(
    //     asParentInfoUser,  
    //     asInfoUser
    //   );
    // } else {
    //   console.log("DEBUG: PostsComponent mouseleave() error..");
    // }
  }
}
