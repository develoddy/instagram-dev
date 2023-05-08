import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSharepostComponent } from './modal-sharepost.component';

describe('ModalSharepostComponent', () => {
  let component: ModalSharepostComponent;
  let fixture: ComponentFixture<ModalSharepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSharepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSharepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
