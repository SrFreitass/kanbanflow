import { compare } from 'bcrypt';
import { randomUUID } from 'crypto';
import { sign } from 'jsonwebtoken';
import { z } from "zod";
import { RefreshTokenRepository } from "../repositories/refreshToken.repository";
import { UserRepository } from "../repositories/user.repository";

class SignInService {
    constructor(
        private readonly userRepository: UserRepository, 
        private readonly refreshToken: RefreshTokenRepository
    ) {}

    async execute(credentials: { email: string; password: string }) {
        const schema = z.object({
            email: z.string(),
            password: z.string()
        });

        const res = schema.safeParse(credentials);

        if(res.error) {
            return {
                statusCode: 422,
                success: false,
                errors: res.error
            }
        }

        credentials.email = credentials.email.toLowerCase();

        const user = await this.userRepository.findByEmail(credentials.email);

        if(!user) {
            return {
                statusCode: 400,
                success: false,
                message: 'E-mail ou senha incorretos!'
            }
        }

        const isPasswordValid = await compare(credentials.password, user.password);

        if(!isPasswordValid) {
            return {
                statusCode: 400,
                success: false,
                message: 'E-mail ou senha incorretos!'
            }
        }

        const token = sign({
            userId: user.id
        }, process.env?.SECRET_KEY as string, {
            expiresIn: '1h'
        });
        
        const refreshToken = `${randomUUID()}-${randomUUID()}`
        await this.refreshToken.refresh({
            user_id: user.id,
            token: refreshToken
        });
        
        return {
            statusCode: 200,
            success: true,
            message: "Logado com sucesso!",
            data: {
                token,
                refreshToken
            }
        }
    }
}

export { SignInService };
