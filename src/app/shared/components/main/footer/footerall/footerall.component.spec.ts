import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterallComponent } from './footerall.component';

describe('FooterallComponent', () => {
  let component: FooterallComponent;
  let fixture: ComponentFixture<FooterallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
