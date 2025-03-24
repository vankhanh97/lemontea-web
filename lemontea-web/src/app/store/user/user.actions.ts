import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadProfile = createAction('[User] Load Profile');

export const loadProfileSuccess = createAction(
    '[User] Load Profile Success',
    props<{ profile: User }>()
);

export const loadProfileFailure = createAction(
    '[User] Load Profile Failure',
    props<{ error: string }>()
);

export const updateProfile = createAction(
    '[User] Update Profile',
    props<{ profile: Partial<User> }>()
);

export const updateProfileSuccess = createAction(
    '[User] Update Profile Success',
    props<{ profile: User }>()
);

export const updateProfileFailure = createAction(
    '[User] Update Profile Failure',
    props<{ error: string }>()
);

export const deleteProfile = createAction('[User] Delete Profile');

export const deleteProfileSuccess = createAction('[User] Delete Profile Success');

export const deleteProfileFailure = createAction(
    '[User] Delete Profile Failure',
    props<{ error: string }>()
); 