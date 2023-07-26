import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditusernameComponent } from './editusername.component';

describe('EditusernameComponent', () => {
  let component: EditusernameComponent;
  let fixture: ComponentFixture<EditusernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditusernameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditusernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
