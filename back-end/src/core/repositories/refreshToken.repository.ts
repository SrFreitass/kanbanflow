interface RefreshTokenRepository {
    create(refreshToken: RefreshTokenModel): Promise<void>;
}

export { RefreshTokenRepository };
