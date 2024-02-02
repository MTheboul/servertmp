import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signup.dto';
import { AuthResult } from './interfaces/auth-result.interface';
import { RefreshTokenDto } from './dto/refresh-token.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signIn(signInDto: LoginDto): Promise<AuthResult>;
    signUp(signUpDto: SignUpDto): Promise<AuthResult>;
    refreshToken(authorization: string, refreshTokenDto: RefreshTokenDto): Promise<AuthResult>;
}
