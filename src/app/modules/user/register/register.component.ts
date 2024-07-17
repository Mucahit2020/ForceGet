import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';
import { environment } from 'src/app/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  private apiUrl = environment.apiUrl+'/api/register/create';


  constructor(private fb: FormBuilder, private http: HttpClient, private message: NzMessageService) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { 'mismatch': true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const formValue = this.registerForm.value;
      const userData = {
        username: formValue.username,
        password: formValue.password
      };

      this.http.post(this.apiUrl, userData).subscribe({
        next: () => this.message.success('Registration successful!'),
        error: (error) => {
          console.error('Registration error:', error);
          this.message.error('Registration failed. Please try again.');
        }
      });
    } else {
      this.message.error('Form is invalid, please check your input.');
    }
  }
}
