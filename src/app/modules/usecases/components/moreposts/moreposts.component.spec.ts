import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorepostsComponent } from './moreposts.component';

describe('MorepostsComponent', () => {
  let component: MorepostsComponent;
  let fixture: ComponentFixture<MorepostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorepostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorepostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
