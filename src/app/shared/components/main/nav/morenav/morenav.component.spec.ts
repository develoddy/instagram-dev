import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorenavComponent } from './morenav.component';

describe('MorenavComponent', () => {
  let component: MorenavComponent;
  let fixture: ComponentFixture<MorenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
