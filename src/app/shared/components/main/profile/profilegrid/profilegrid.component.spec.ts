import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilegridComponent } from './profilegrid.component';

describe('ProfilegridComponent', () => {
  let component: ProfilegridComponent;
  let fixture: ComponentFixture<ProfilegridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilegridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilegridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
