import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFollowingComponent } from './modal-following.component';

describe('ModalFollowingComponent', () => {
  let component: ModalFollowingComponent;
  let fixture: ComponentFixture<ModalFollowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFollowingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
