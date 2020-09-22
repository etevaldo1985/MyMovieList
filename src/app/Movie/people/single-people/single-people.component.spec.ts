import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePeopleComponent } from './single-people.component';

describe('SinglePeopleComponent', () => {
  let component: SinglePeopleComponent;
  let fixture: ComponentFixture<SinglePeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
