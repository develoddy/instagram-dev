import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectchatComponent } from './directchat.component';

describe('DirectchatComponent', () => {
  let component: DirectchatComponent;
  let fixture: ComponentFixture<DirectchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
