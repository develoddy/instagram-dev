import { Component, ElementRef, NgZone, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  /*
  width: number = 0;
  height: number = 0;
  domRectReadOnly: DOMRectReadOnly | undefined;

  @ViewChild('asParent') asParent: ElementRef;
  @ViewChild('asTitle') asTitle: ElementRef;

  lenguajes:string[] = ["php","javascript","c++","java","phyton"];
  mobileMedia:any = window.matchMedia("(max-width:520px)");
  */

  constructor(private render2: Renderer2) {
    /*if (this.mobileMedia.matches) {
      this.lenguajes.splice(-3, 3);
    }*/
  }

  /*onResize(entry: ResizeObserverEntry[]) {
    this.width = entry[0].contentRect.width
    this.height = entry[0].contentRect.height;
    this.domRectReadOnly = entry[0].contentRect;
  }*/

  /*ngAfterViewInit() {
    const asTitle = this.asTitle.nativeElement;
    this.render2.setStyle(asTitle, 'color', 'green');
  }*/

  ngOnInit() {}

}
