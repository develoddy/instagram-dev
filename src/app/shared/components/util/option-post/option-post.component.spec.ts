import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionPostComponent } from './option-post.component';

describe('OptionPostComponent', () => {
  let component: OptionPostComponent;
  let fixture: ComponentFixture<OptionPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
