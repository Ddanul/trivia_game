import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { QuestionHomeComponent } from './question/question-home/question-home.component'
import { QuestionAddComponent } from './question/question-add/question-add.component'
import { QuestionLandingComponent } from './question/question-landing/question-landing.component'

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'question', component: QuestionComponent, children: [
          {path: 'landing', component: QuestionLandingComponent},
          {path: 'home', component: QuestionHomeComponent},
          {path: 'add', component: QuestionAddComponent}
    ]}
];
export const routing = RouterModule.forRoot(APP_ROUTES);
