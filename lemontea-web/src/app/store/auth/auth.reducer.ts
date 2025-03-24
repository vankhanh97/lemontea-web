import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState, initialState } from './auth.state';

export const authReducer = createReducer(
    initialState,
    on(AuthActions.login, (state: AuthState) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(AuthActions.loginSuccess, (state: AuthState, { user, token }) => ({
        ...state,
        user,
        token,
        loading: false,
        error: null
    })),
    on(AuthActions.loginFailure, (state: AuthState, { error }) => ({
        ...state,
        loading: false,
        error
    })),
    on(AuthActions.register, (state: AuthState) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(AuthActions.registerSuccess, (state: AuthState, { user, token }) => ({
        ...state,
        user,
        token,
        loading: false,
        error: null
    })),
    on(AuthActions.registerFailure, (state: AuthState, { error }) => ({
        ...state,
        loading: false,
        error
    })),
    on(AuthActions.logout, (state: AuthState) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(AuthActions.logoutSuccess, () => ({
        ...initialState
    })),
    on(AuthActions.logoutFailure, (state: AuthState, { error }) => ({
        ...state,
        loading: false,
        error
    }))
); 