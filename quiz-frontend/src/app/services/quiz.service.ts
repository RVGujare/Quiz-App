import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private baseUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any> {
    return this.http.get(`${this.baseUrl}/quiz`);
  }

  submitAnswers(answers: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/submit`, { answers });
  }
}
