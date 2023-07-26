import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgridpostsComponent } from './progridposts.component';

describe('ProgridpostsComponent', () => {
  let component: ProgridpostsComponent;
  let fixture: ComponentFixture<ProgridpostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgridpostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgridpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
