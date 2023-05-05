import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtaggedComponent } from './protagged.component';

describe('ProtaggedComponent', () => {
  let component: ProtaggedComponent;
  let fixture: ComponentFixture<ProtaggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtaggedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtaggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
