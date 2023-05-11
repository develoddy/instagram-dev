import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeModalStoryComponent } from './swipe-modal-story.component';

describe('SwipeModalStoryComponent', () => {
  let component: SwipeModalStoryComponent;
  let fixture: ComponentFixture<SwipeModalStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipeModalStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwipeModalStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
