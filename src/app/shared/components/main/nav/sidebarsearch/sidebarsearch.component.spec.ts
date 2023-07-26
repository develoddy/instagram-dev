import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarsearchComponent } from './sidebarsearch.component';

describe('SidebarsearchComponent', () => {
  let component: SidebarsearchComponent;
  let fixture: ComponentFixture<SidebarsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
