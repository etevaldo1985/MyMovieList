import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardLatestComponent } from './movie-card-latest.component';

describe('MovieCardLatestComponent', () => {
  let component: MovieCardLatestComponent;
  let fixture: ComponentFixture<MovieCardLatestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardLatestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardLatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
