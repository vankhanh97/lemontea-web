import { User } from '../../models/user.model';

export interface AuthState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

export const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null
}; 