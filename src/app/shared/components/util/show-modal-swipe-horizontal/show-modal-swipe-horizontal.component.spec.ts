import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowModalSwipeHorizontalComponent } from './show-modal-swipe-horizontal.component';

describe('ShowModalSwipeHorizontalComponent', () => {
  let component: ShowModalSwipeHorizontalComponent;
  let fixture: ComponentFixture<ShowModalSwipeHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowModalSwipeHorizontalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowModalSwipeHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
