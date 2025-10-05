import { Routes } from '@angular/router';
import { QuizComponent } from './components/quiz.component/quiz.component';
import { ResultComponent } from './components/result.component/result.component';
import { StartComponent } from './components/start.component/start.component';


export const appRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'submit', component: ResultComponent }
];
