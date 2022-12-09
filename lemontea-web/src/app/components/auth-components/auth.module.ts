import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";


@NgModule({
    declarations: [LoginComponent ,SignUpComponent],
    exports: [
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      AuthRoutingModule,
      MatInputModule,
      MatFormFieldModule
    ]
  })
  export class AuthModule {
  }