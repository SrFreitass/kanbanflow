import { prisma } from "../../../prisma/prisma";
import { RefreshTokenModel } from "../../core/models/refreshToken.model";
import { RefreshTokenRepository } from "../../core/repositories/refreshToken.repository";

class RefreshTokenRepositoryImpl implements RefreshTokenRepository {
    async refresh(refreshToken: RefreshTokenModel): Promise<void> {
        await prisma.refresh_tokens.update({
            data: {
                token: refreshToken.token
            },
            where: {
                user_id: refreshToken.user_id
            }
        })
    }
    async create(refreshToken: RefreshTokenModel): Promise<void> {
        await prisma.refresh_tokens.create({
            data: refreshToken
        });
    }
}

export { RefreshTokenRepositoryImpl };
