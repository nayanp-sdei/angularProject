import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  submitted = false;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    // Create reactive form group
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailRegx)])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
  }

  /*
  * Login Form submit
  */
  onSubmit(): void {
    if (this.loginForm.valid) {
      if (this.loginForm.value.email !== 'chirag@yopmail.com') {
        this.toastr.error('Email or password is incorrect.', 'Login');
        return;
      } else if (this.loginForm.value.password !== '12345') {
        this.toastr.error('Email or password is incorrect.', 'Login');
        return;
      }
      this.submitted = true; // To disable submit button

      // Call api to enter the data in database
      if (
        this.loginForm.value.email === 'chirag@yopmail.com' &&
        this.loginForm.value.password === '12345'
      ){
        this.reset();           // Reset login form
        this.submitted = false; // To enable submit button
        localStorage.setItem('loggedInUser', JSON.stringify('chirag@yopmail.com')); // saved loggedin user email in localstorage
        this.toastr.success('Successfully Loggedin.', 'Login');
        this.router.navigate(['/profile']);
      }
    }
  }

  /*
  * Reset Login Form
  */
  reset(): void {
    this.loginForm.reset();
  }

}
