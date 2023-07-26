import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilereelsComponent } from './profilereels.component';

describe('ProfilereelsComponent', () => {
  let component: ProfilereelsComponent;
  let fixture: ComponentFixture<ProfilereelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilereelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilereelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
