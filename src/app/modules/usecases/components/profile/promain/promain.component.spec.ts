import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromainComponent } from './promain.component';

describe('PromainComponent', () => {
  let component: PromainComponent;
  let fixture: ComponentFixture<PromainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
