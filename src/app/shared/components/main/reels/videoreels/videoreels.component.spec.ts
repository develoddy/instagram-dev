import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoreelsComponent } from './videoreels.component';

describe('VideoreelsComponent', () => {
  let component: VideoreelsComponent;
  let fixture: ComponentFixture<VideoreelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoreelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoreelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
