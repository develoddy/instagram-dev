import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojisInputPostComponent } from './emojis-input-post.component';

describe('EmojisInputPostComponent', () => {
  let component: EmojisInputPostComponent;
  let fixture: ComponentFixture<EmojisInputPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmojisInputPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojisInputPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
