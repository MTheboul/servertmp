import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { AuthResult } from './interfaces/auth-result.interface';
import { RefreshTokenDto } from './dto/refresh-token.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(signInDto: LoginDto): Promise<AuthResult>;
    getEmojiChars(text: string): RegExpMatchArray;
    signUp(signUpDto: SignUpDto): Promise<AuthResult>;
    refreshTokens(authorization: string, refreshTokenDto: RefreshTokenDto): Promise<AuthResult>;
    private extractTokenFromHeader;
    private getUserFromAccessToken;
    private generateTokens;
}
