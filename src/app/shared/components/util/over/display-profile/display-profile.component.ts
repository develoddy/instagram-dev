import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css']
})
export class DisplayProfileComponent implements OnInit  {

  
  constructor(private render2: Renderer2) {}
  ngOnInit(){}

 

  //ngOnInit() {
  //}

  // @HostListener('mouseenter')
  // mouseenter() {
  //   console.log("Dios mío, es un ratón!!!");
  // }

  // @HostListener('mouseover')
  // mouseover() {
  //   console.log("Dios mío, todavía está aquí!!!");
  // }

  // @HostListener('mouseout')
  // mouseout() {
  //   console.log('Uf, gracias a Dios se fue!')
  // }

  // @HostListener('mouseenter')
  // mouseenter() {
  //   console.log("Dios mío, es un ratón!!!");
  // }


  

  //@HostListener('mouseenter')
  // @HostListener('mouseenter', ['$event.target']) onMouseEnter (event:any) {
  //   console.log("Dios mío, es un ratón!!!");
  // }

  // @HostListener('mouseover', ['$event.target']) onMouseHover(event:any) {
  //   console.log("Dios mío, todavía está aquí!!!");
  // }

  // @HostListener('mouseout', ['$event.target']) onMouseOut(event:any) {
    //console.log('Uf, gracias a Dios se fue!')
  // }

}
