import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const login = createAction(
    '[Auth] Login',
    props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
    '[Auth] Login Success',
    props<{ user: User; token: string }>()
);

export const loginFailure = createAction(
    '[Auth] Login Failure',
    props<{ error: string }>()
);

export const register = createAction(
    '[Auth] Register',
    props<{ email: string; password: string; role: 'member' | 'admin' }>()
);

export const registerSuccess = createAction(
    '[Auth] Register Success',
    props<{ user: User; token: string }>()
);

export const registerFailure = createAction(
    '[Auth] Register Failure',
    props<{ error: string }>()
);

export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success');

export const logoutFailure = createAction(
    '[Auth] Logout Failure',
    props<{ error: string }>()
); 