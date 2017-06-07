import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { QuestionComponent } from './question/question.component';
import { QuestionService } from './question/question.service';
import { QuestionAddComponent } from './question/question-add/question-add.component';
import { QuestionHomeComponent } from './question/question-home/question-home.component';
import { QuestionLandingComponent } from './question/question-landing/question-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuestionComponent,
    QuestionAddComponent,
    QuestionHomeComponent,
    QuestionLandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LoginService, QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
