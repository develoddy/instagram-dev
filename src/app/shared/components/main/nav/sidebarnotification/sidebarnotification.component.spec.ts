import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarnotificationComponent } from './sidebarnotification.component';

describe('SidebarnotificationComponent', () => {
  let component: SidebarnotificationComponent;
  let fixture: ComponentFixture<SidebarnotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarnotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
