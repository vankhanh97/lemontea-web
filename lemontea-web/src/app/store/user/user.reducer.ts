import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { UserState, initialState } from './user.state';

export const userReducer = createReducer(
    initialState,
    on(UserActions.loadProfile, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(UserActions.loadProfileSuccess, (state, { profile }) => ({
        ...state,
        profile,
        loading: false,
        error: null
    })),
    on(UserActions.loadProfileFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
    on(UserActions.updateProfile, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(UserActions.updateProfileSuccess, (state, { profile }) => ({
        ...state,
        profile,
        loading: false,
        error: null
    })),
    on(UserActions.updateProfileFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    })),
    on(UserActions.deleteProfile, (state) => ({
        ...state,
        loading: true,
        error: null
    })),
    on(UserActions.deleteProfileSuccess, () => ({
        ...initialState
    })),
    on(UserActions.deleteProfileFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error
    }))
); 