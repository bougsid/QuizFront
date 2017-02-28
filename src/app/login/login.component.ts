import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {LoginService} from "./login.service";
import { Router} from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public form: FormGroup;
  public username: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  public token: string;

  constructor(fb: FormBuilder, private loginService: LoginService, private router: Router) {
    console.log('login component');
    this.form = fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
    this.username = this.form.controls['username'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values): void {
    if (this.form.valid) {
      this.loginService.login(values.username, values.password).subscribe(res => {
        this.token = res.token;
        console.log(this.token);
        if (this.token) {
          localStorage.setItem('id_token',this.token);
          this.router.navigate(['./home/quiz']);
        }
      });
    }
  }
}
