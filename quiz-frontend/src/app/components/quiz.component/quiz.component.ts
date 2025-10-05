import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
})
export class QuizComponent implements OnInit {
  questions: any[] = [];
  currentIndex = 0;
  answers: any = {};

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
    this.quizService.getQuestions().subscribe(res => (this.questions = res));
  }

  selectOption(qId: number, option: number) {
    this.answers[qId] = option;
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) this.currentIndex++;
  }

  prevQuestion() {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  submitQuiz() {
  const formatted = Object.entries(this.answers).map(([id, answer]) => ({
    id: Number(id),
    answer
  }));

  localStorage.setItem('answers', JSON.stringify(formatted));

  this.router.navigate(['/submit']);
}

}
