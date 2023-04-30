import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlepostComponent } from './articlepost.component';

describe('ArticlepostComponent', () => {
  let component: ArticlepostComponent;
  let fixture: ComponentFixture<ArticlepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
