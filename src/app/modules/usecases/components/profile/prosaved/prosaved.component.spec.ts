import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsavedComponent } from './prosaved.component';

describe('ProsavedComponent', () => {
  let component: ProsavedComponent;
  let fixture: ComponentFixture<ProsavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProsavedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProsavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
