/**
 * Created by bougsid.ayoub on 2/27/2017.
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate() {
    if(this.loginService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);//To change
      return false;
    }
  }
}
