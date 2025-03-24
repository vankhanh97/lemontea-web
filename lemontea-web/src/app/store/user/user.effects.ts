import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UserService } from '../../services/user.service';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
    loadProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadProfile),
            mergeMap(() =>
                this.userService.getProfile().pipe(
                    map(profile => UserActions.loadProfileSuccess({ profile })),
                    catchError(error => of(UserActions.loadProfileFailure({ error: error.message })))
                )
            )
        )
    );

    updateProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.updateProfile),
            mergeMap(({ profile }) =>
                this.userService.updateProfile(profile).pipe(
                    map(updatedProfile => UserActions.updateProfileSuccess({ profile: updatedProfile })),
                    catchError(error => of(UserActions.updateProfileFailure({ error: error.message })))
                )
            )
        )
    );

    deleteProfile$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.deleteProfile),
            mergeMap(() =>
                this.userService.deleteProfile().pipe(
                    map(() => UserActions.deleteProfileSuccess()),
                    catchError(error => of(UserActions.deleteProfileFailure({ error: error.message })))
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {}
} 