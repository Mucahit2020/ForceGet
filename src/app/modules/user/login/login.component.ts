import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = {
    username: '',
    password: ''
  };
  errorMessage: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  isFormValid(): boolean {
    return this.loginForm.username.trim() !== '' && this.loginForm.password.trim() !== '';
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.authService.login(this.loginForm.username, this.loginForm.password).pipe(
        catchError(error => {
          this.errorMessage = 'Giriş başarısız. Lütfen kullanıcı adı ve şifrenizi kontrol edin ve tekrar deneyin.';
          return of(null);
        })
      ).subscribe(response => {
        if (response && response.token) {
          localStorage.setItem('authToken', response.token);
          this.router.navigate(['/offer']);
        }
      });
    } else {
      this.errorMessage = 'Lütfen tüm alanları doldurun.';
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  onRegister(): void {

    this.router.navigate(['/register']);
  }
}
