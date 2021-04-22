import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  login = false;
  currentUser: any;

  constructor(
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.checkLogin();
  }

  /*
  * Verity user loggedIn or not
  */
  checkLogin(): void {
    const loggedIn = localStorage.getItem('loggedInUser');
    if (loggedIn === null || loggedIn === undefined) {
      this.login = false;
    } else {
      this.login = true;
    }
  }

  /*
  * Logout
  */
  logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
    this.toastr.info('Successfully logout.');
  }
}
