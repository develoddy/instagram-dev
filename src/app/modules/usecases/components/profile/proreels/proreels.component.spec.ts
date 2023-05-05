import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProreelsComponent } from './proreels.component';

describe('ProreelsComponent', () => {
  let component: ProreelsComponent;
  let fixture: ComponentFixture<ProreelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProreelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProreelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
