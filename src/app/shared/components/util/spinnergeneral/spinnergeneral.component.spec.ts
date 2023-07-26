import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnergeneralComponent } from './spinnergeneral.component';

describe('SpinnergeneralComponent', () => {
  let component: SpinnergeneralComponent;
  let fixture: ComponentFixture<SpinnergeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnergeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpinnergeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
