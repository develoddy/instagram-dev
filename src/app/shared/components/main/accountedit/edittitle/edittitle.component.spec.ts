import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittitleComponent } from './edittitle.component';

describe('EdittitleComponent', () => {
  let component: EdittitleComponent;
  let fixture: ComponentFixture<EdittitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdittitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdittitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
