import { prisma } from "../../../prisma/prisma";
import { UserModel } from "../../core/models/user.model";
import { UserRepository } from "../../core/repositories/user.repository";

class UserRepositoryImpl implements UserRepository {
    async create(user: UserModel): Promise<string> {
        const userCreated = await prisma.users.create({
            data: user
        });

        return userCreated.id;
    }

    async findByEmail(email: string): Promise<UserModel | null> {
        return await prisma.users.findFirst({
            where: {
                email,
            }
        })
    }
}

export { UserRepositoryImpl };
