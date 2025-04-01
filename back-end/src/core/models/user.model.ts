interface UserModel {
    id: string;
    name: string;
    email: string;
    password: string;
    role?: string;
    permission?: 'user' | 'admin';
}

export { UserModel };
