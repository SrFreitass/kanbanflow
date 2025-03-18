import { FastifyReply, FastifyRequest } from "fastify";
import { UserModel } from "../../core/models/user.model";
import { SignUpService } from "../../core/services/signUp.service";
import { RefreshTokenRepositoryImpl } from "../../infra/repositories/refreshToken.repository";
import { UserRepositoryImpl } from "../../infra/repositories/user.repository";

class SignUpController {
    async execute(req: FastifyRequest, reply: FastifyReply) {
        const body = req.body;

        const service = new SignUpService(
            new UserRepositoryImpl(), 
            new RefreshTokenRepositoryImpl()
        );

        const response = await service.execute(body as UserModel);

        reply.status(response.statusCode);
        
        return response;
    }
}

export default new SignUpController();
