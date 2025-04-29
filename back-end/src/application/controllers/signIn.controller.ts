import { FastifyReply, FastifyRequest } from "fastify";
import { SignInService } from "../../core/services/signIn.service";
import { RefreshTokenRepositoryImpl } from "../../infra/repositories/refreshToken.repository";
import { UserRepositoryImpl } from "../../infra/repositories/user.repository";

class SignInController {
    async execute(req: FastifyRequest, reply: FastifyReply) {
        const body = req.body;

        const service = new SignInService(
            new UserRepositoryImpl(), 
            new RefreshTokenRepositoryImpl()
        );

        console.log(service)
        const response = await service.execute(body as { email: string; password: string });
        console.log(response)
        reply.status(response.statusCode);
        
        return response;
    }
}

export default new SignInController();