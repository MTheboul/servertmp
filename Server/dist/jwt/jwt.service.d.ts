import { JwtService } from '@nestjs/jwt';
export declare class JWTService {
    private jwtService;
    constructor(jwtService: JwtService);
    verifyAccessToken(token: string): Promise<any>;
    verifyRefreshToken(token: string): Promise<any>;
}
