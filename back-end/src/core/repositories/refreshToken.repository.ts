import { RefreshTokenModel } from "../models/refreshToken.model";

interface RefreshTokenRepository {
    create(refreshToken: RefreshTokenModel): Promise<void>;
    refresh(refreshToken: RefreshTokenModel): Promise<void>
}

export { RefreshTokenRepository };
