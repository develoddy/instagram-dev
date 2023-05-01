import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-articlepost',
  templateUrl: './articlepost.component.html',
  styleUrls: ['./articlepost.component.css']
})
export class ArticlepostComponent {
  @ViewChild('asProfileImageHeaderRef') asProfileImageHeaderRef:ElementRef;
  @ViewChild('asUsernameHeaderElementRef') asUsernameHeaderElementRef:ElementRef;
  @ViewChild('asUsernameContentElementRef') asUsernameContentElementRef:ElementRef;
  @Output() mouseOverEvent = new EventEmitter();
  @Output() mouseOveliEvent = new EventEmitter();

  mouseover(hover:boolean, option:string) {
    if ( option == 'img-profile-header' ) {
      this.sendDataToPost(
        hover, 
        option, 
        this.asProfileImageHeaderRef
      );
    }

    if ( option == 'span-username-header' ) {
      this.sendDataToPost(
        hover, 
        option, 
        this.asUsernameHeaderElementRef
      );
    }

    if ( option == 'span-username-content' ) {
      this.sendDataToPost(
        hover, 
        option, 
        this.asUsernameContentElementRef
      );
    }
  }

  sendDataToPost(hover: boolean, option:string, ref:ElementRef) {
    this.mouseOverEvent.emit({
      hover: hover,
      option: option,
      ref: ref
    });
  }

}
