import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkprofileComponent } from './linkprofile.component';

describe('LinkprofileComponent', () => {
  let component: LinkprofileComponent;
  let fixture: ComponentFixture<LinkprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
