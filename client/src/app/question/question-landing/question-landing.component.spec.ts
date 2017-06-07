import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionLandingComponent } from './question-landing.component';

describe('QuestionLandingComponent', () => {
  let component: QuestionLandingComponent;
  let fixture: ComponentFixture<QuestionLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
