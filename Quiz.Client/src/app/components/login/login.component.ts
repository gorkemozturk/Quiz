import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: string = 'LOGIN';
  form: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  get field() { return this.form.controls; }

  onSubmit(form: NgForm): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.service.login(form.value).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res);
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
