import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
})
export class QuestionComponent implements OnInit {
  title: string = 'CREATE A NEW QUESTION'
  form: FormGroup;
  submitted: boolean = false;
  questions: Question[];
  question: Question;

  constructor(private fb: FormBuilder, private service: QuestionService) { }

  ngOnInit() {
    this.form = this.fb.group({
      body: [null, [Validators.required, Validators.maxLength(150)]]
    });

    this.service.getQuestions().subscribe((res: Question[]) => this.questions = res);
  }

  get field() { return this.form.controls; }

  onSubmit(form: NgForm): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.service.postQuestion(form.value).subscribe(
      (res: Question) => {
        console.log(res);
        this.questions.push(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  onDelete(question: Question): void {
    this.service.deleteQuestion(question).subscribe(
      res => {
        console.log(res);
        const index = this.questions.indexOf(question);
        this.questions.splice(index, 1);
      },
      err => {
        console.log(err);
      }
    );
  }
}
