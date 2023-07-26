import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@core/http/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    public authService: AuthenticationService,
    private router: Router
  ) {
    if (this.authService.isLoggedIn) {
      this.router.navigate(['/']);
    }
  }
}
