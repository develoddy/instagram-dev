import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectsidebarComponent } from './directsidebar.component';

describe('DirectsidebarComponent', () => {
  let component: DirectsidebarComponent;
  let fixture: ComponentFixture<DirectsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectsidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
