import { UserModel } from "../models/user.model";

interface UserRepository {
    create(user: UserModel): Promise<string>;

    findByEmail(email: string): Promise<UserModel | null>;
}

export { UserRepository };
