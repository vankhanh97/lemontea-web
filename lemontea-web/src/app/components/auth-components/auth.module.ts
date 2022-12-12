import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule} from '@angular/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
    declarations: [LoginComponent ],
    exports: [
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      AuthRoutingModule,
      MatInputModule,
      MatFormFieldModule,
      BrowserModule,
      MatToolbarModule,
      MatIconModule,
      MatNativeDateModule,
      FormsModule,
      MatButtonModule
    ]
  })
  export class AuthModule {
  }