import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd/message';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl+'/api/auth';

  constructor(private http: HttpClient, private msg: NzMessageService) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  // Kullanıcıyı giriş yapma
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => {
        localStorage.setItem('authToken', response.token);
        this.msg.success('Giriş başarılı!');
      }),
      catchError(this.handleError.bind(this))
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred.';

    if (error.error instanceof ErrorEvent) {
      errorMessage = 'Network error: Unable to connect to the API. Please check your internet connection.';
    } else {
      switch (error.status) {
        case 0:
          errorMessage = 'Unable to connect to the API. Please check your internet connection.';
          break;
        case 400:
          errorMessage = 'Invalid request. Please check your login details.';
          break;
        case 401:
          errorMessage = 'Unauthorized access. Please check your login details.';
          break;
        case 500:
          errorMessage = 'Server error. Please try again later.';
          break;
        default:
          errorMessage = `Error: ${error.status}. Please try again later.`;
          break;
      }
      console.log(errorMessage);
    }



    this.msg.error(errorMessage);

    return throwError(() => new Error(errorMessage));
  }
}
