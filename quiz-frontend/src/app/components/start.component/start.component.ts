import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './start.component.html', 
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  constructor(private router: Router) {}

  startQuiz() {
    this.router.navigate(['/quiz']);
  }
}
