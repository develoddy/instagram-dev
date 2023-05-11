import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewstorieComponent } from './viewstorie.component';

describe('ViewstorieComponent', () => {
  let component: ViewstorieComponent;
  let fixture: ComponentFixture<ViewstorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewstorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewstorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
