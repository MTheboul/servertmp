import { CanActivate, ExecutionContext } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JWTService } from 'src/jwt/jwt.service';
export declare class AuthGuard implements CanActivate {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JWTService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
