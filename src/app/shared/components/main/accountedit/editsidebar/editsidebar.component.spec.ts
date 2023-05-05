import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsidebarComponent } from './editsidebar.component';

describe('EditsidebarComponent', () => {
  let component: EditsidebarComponent;
  let fixture: ComponentFixture<EditsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
