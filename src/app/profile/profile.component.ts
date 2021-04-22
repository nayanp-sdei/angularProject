import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData: any;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getUserData();
  }

  /*
  * Get loggedin user details
  */
  getUserData(): void {
    this.userData = {
      firstName: 'chirag',
      lastName: 'sharma',
      email: 'chirag@yopmail.com',
      dob: '2000-Jan-24',
      address: 'E-37, Phase VIII',
      city: 'mohali',
      state: 'punjab',
      zipCode: 160071
    };
  }
}
