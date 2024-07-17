import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule  } from 'ng-zorro-antd/checkbox';
import { NzMessageServiceModule } from 'ng-zorro-antd/message';
import { RouterModule } from '@angular/router';
import { UserRoutingModule } from './user.routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule,
    NzLayoutModule,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzMessageServiceModule,
    UserRoutingModule,
    ReactiveFormsModule,
    CommonModule,


  ],
  exports:[LoginComponent]
})
export class UserModule { }
