export interface User {
    id: string;
    email: string;
    username?: string;
    role: 'member' | 'admin';
    birthdate?: Date;
    gender?: 'male' | 'female' | 'other';
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
} 