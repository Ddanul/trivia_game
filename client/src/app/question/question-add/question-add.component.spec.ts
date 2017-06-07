import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAddComponent } from './question-add.component';

describe('QuestionAddComponent', () => {
  let component: QuestionAddComponent;
  let fixture: ComponentFixture<QuestionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
