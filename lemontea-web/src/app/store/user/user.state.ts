import { User } from '../../models/user.model';

export interface UserState {
    profile: User | null;
    loading: boolean;
    error: string | null;
}

export const initialState: UserState = {
    profile: null,
    loading: false,
    error: null
}; 