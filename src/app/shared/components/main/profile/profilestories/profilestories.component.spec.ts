import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilestoriesComponent } from './profilestories.component';

describe('ProfilestoriesComponent', () => {
  let component: ProfilestoriesComponent;
  let fixture: ComponentFixture<ProfilestoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilestoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilestoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
