import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private readonly url = 'https://localhost:44323/api/questions/';

  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get(this.url);
  }

  postQuestion(question: Question) {
    return this.http.post(this.url, question);
  }

  putQuestion(question: Question) {
    return this.http.put(this.url + question.id, question);
  }

  deleteQuestion(question: Question) {
    return this.http.delete(this.url + question.id);
  }
}
