import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshfeedComponent } from './refreshfeed.component';

describe('RefreshfeedComponent', () => {
  let component: RefreshfeedComponent;
  let fixture: ComponentFixture<RefreshfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshfeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefreshfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
