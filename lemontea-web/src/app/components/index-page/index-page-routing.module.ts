import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule} from '@angular/core';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule} from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { IndexLemonComponent } from './index-lemon/index-lemon.component';



@NgModule({
    declarations: [IndexLemonComponent ],
    exports: [
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
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
  export class IndexPageRoutingModule {
  }