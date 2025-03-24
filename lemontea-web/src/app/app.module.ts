import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './components/auth-components/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { IndexPageModule } from './components/index-page/index-page.module';
import { authReducer } from './store/auth/auth.reducer';
import { userReducer } from './store/user/user.reducer';
import { AuthEffects } from './store/auth/auth.effects';
import { UserEffects } from './store/user/user.effects';
import { environment } from '../environments/environment';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        AuthModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MaterialExampleModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        AppRoutingModule,
        IndexPageModule,
        StoreModule.forRoot({
            auth: authReducer,
            user: userReducer
        }),
        EffectsModule.forRoot([AuthEffects, UserEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production
        })
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
