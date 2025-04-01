import { prisma } from "../../../prisma/prisma";
import { RefreshTokenRepository } from "../../core/repositories/refreshToken.repository";

class RefreshTokenRepositoryImpl implements RefreshTokenRepository {
    async create(refreshToken: RefreshTokenModel): Promise<void> {
        await prisma.refresh_tokens.create({
            data: refreshToken
        });
    }
}

export { RefreshTokenRepositoryImpl };
