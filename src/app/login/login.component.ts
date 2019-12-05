import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../localStorageService';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { NumberValueAccessor } from '@angular/forms/src/directives';

export interface IUser {
  id?: number;
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: IUser = {
    username: null,
    password: null
  };
  constructor(private router: Router, private toastService: ToastService) {
  }

  ngOnInit() {

  }
  login(user: IUser) {
    // console.log('from login user: ', user);

    const presetUser = { username: 'akaljot', password: 'akaljot123' };

    if (user.username != null && user.password != null && user.username !== '' && user.password !== '') {
      // log the user in
      // console.log('from within if statement....');
      if (user.username === presetUser.username && user.password === presetUser.password) {
        // actually log the user in
        // Saving data to localStorage
        localStorage.setItem('user', JSON.stringify(user));
        // navigate to the contacts page
        this.router.navigate(['contacts', user]);
      } else {
        this.toastService.showToast('warning', 2000, 'Username or password is wrong');
      }
    } else {
      // console.log('Must specifiy credentials');
      this.toastService.showToast('danger', 2000, 'Must specifiy credentials');
    }
  }

}
