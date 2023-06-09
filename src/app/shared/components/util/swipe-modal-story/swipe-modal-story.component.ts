import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-swipe-modal-story',
  templateUrl: './swipe-modal-story.component.html',
  styleUrls: ['./swipe-modal-story.component.css']
})
export class SwipeModalStoryComponent {

  @Output() closeSwipeModal = new EventEmitter()
  constructor(  private router: Router ) {}

  closeSwipeModalStories(close: boolean) {
      this.closeSwipeModal.emit(close);
  }
}
