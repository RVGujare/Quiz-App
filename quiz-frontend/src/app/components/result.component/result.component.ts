import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  score: number | null = null;
  loading: boolean = true;

  constructor(private quizService: QuizService, private router: Router) {}

  ngOnInit(): void {
  const answers = JSON.parse(localStorage.getItem('answers') || '[]');

  this.quizService.submitAnswers(answers).subscribe({
    next: (res) => {
      this.score = res.score;
      localStorage.removeItem('answers');
    },
    error: (err) => {
      console.error(err);
      alert('Error submitting quiz. Please try again.');
      this.router.navigate(['/']);
    }
  });
}


  restartQuiz(): void {
    this.router.navigate(['/']);
  }
}

