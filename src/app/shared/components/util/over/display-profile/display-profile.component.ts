import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-display-profile',
  templateUrl: './display-profile.component.html',
  styleUrls: ['./display-profile.component.css']
})
export class DisplayProfileComponent implements OnInit  {

  constructor(private render2: Renderer2) {}
  ngOnInit(){}
}
