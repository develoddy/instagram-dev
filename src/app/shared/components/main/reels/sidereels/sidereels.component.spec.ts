import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidereelsComponent } from './sidereels.component';

describe('SidereelsComponent', () => {
  let component: SidereelsComponent;
  let fixture: ComponentFixture<SidereelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidereelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidereelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
