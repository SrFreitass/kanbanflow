import { genSalt, hash } from 'bcrypt';
import { randomUUID } from 'crypto';
import { sign } from 'jsonwebtoken';
import { z } from 'zod';
import { UserModel } from "../models/user.model";
import { RefreshTokenRepository } from "../repositories/refreshToken.repository";
import { UserRepository } from "../repositories/user.repository";

class SignUpService {
    constructor(
        private readonly userRepository: UserRepository, 
        private readonly refreshToken: RefreshTokenRepository
    ) { }
    
    async execute(user: UserModel) {
        const schema = z.object({
            name: z.string(),
            email: z.string().email(),
            password: z.string().min(8).max(15),
        });

        const res = schema.safeParse(user);

        if(res.error) {
            return {
                statusCode: 422,
                success: false,
                errors: res.error
            }
        }

        const userEmail = await this.userRepository.findByEmail(user.email);

        if(userEmail) {
            return {
                statusCode: 400,
                success: false,
                message: "Esse e-mail já existe!"
            }
        }

        const salt = await genSalt(10);
        const hashPassword = await hash(user.password, salt)

        const id = await this.userRepository.create({
            ...user,
            password: hashPassword
        });

        console.log(id);

        if(!id) {
            return {
                statusCode: 500,
                success: false,
            }
        }

        const refreshToken = `${randomUUID()}+${randomUUID()}`
        
        await this.refreshToken.create({
            token: refreshToken,
            user_id: id
        });
        
        const token = sign({
            userId: id
        }, process.env?.SECRET_KEY as string, {
            expiresIn: '1h'
        });

        return {
            statusCode: 200,
            success: true,
            message: "Usuário criado com sucesso",
            data: {
                token,
                refreshToken,
            }
        }
    }
}

export { SignUpService };
