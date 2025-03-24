import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { AuthResponse } from '../../models/auth.model';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            mergeMap(({ email, password }) =>
                this.authService.login(email, password).pipe(
                    map((response: AuthResponse) => AuthActions.loginSuccess({ user: response.user, token: response.token })),
                    catchError(error => of(AuthActions.loginFailure({ error: error.message })))
                )
            )
        )
    );

    register$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.register),
            mergeMap(({ email, password, role }) =>
                this.authService.register(email, password, role).pipe(
                    map((response: AuthResponse) => AuthActions.registerSuccess({ user: response.user, token: response.token })),
                    catchError(error => of(AuthActions.registerFailure({ error: error.message })))
                )
            )
        )
    );

    logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.logout),
            mergeMap(() =>
                this.authService.logout().pipe(
                    map(() => AuthActions.logoutSuccess()),
                    catchError(error => of(AuthActions.logoutFailure({ error: error.message })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) {}
} 