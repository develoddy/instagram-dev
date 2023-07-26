import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridpostsComponent } from './gridposts.component';

describe('GridpostsComponent', () => {
  let component: GridpostsComponent;
  let fixture: ComponentFixture<GridpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridpostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
