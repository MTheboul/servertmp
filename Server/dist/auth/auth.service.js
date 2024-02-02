"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const auth_provider_1 = require("./providers/auth.provider");
const constants_1 = require("../jwt/constants");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signIn(signInDto) {
        const user = await this.usersService.findOneByEmail(signInDto.email);
        if (!user)
            throw new common_1.NotFoundException('Invalid email address or password');
        await this.usersService.checkPasswordMatched(user, signInDto.password);
        return await this.generateTokens(user);
    }
    getEmojiChars(text) {
        return text.match(/\ud83c[\udf00-\udfff]|\ud83d[\udc00-\ude4f]|\ud83d[\ude80-\udeff]/g);
    }
    async signUp(signUpDto) {
        const hashedPassword = await auth_provider_1.AuthProvider.generateHash(signUpDto.password);
        const user = await this.usersService.createIfNotExist({
            OR: [
                {
                    username: signUpDto.username,
                },
                {
                    email: signUpDto.email,
                },
            ],
        }, {
            ...signUpDto,
            password: hashedPassword,
        });
        return await this.generateTokens(user);
    }
    async refreshTokens(authorization, refreshTokenDto) {
        try {
            const userId = await this.getUserFromAccessToken(authorization);
            await this.jwtService.verifyAsync(refreshTokenDto.refreshToken, {
                secret: constants_1.jwtConstants.refreshTokenSecret,
            });
            const user = await this.usersService.getUserIfRefreshTokenMatches(refreshTokenDto.refreshToken, userId);
            if (!user)
                throw new common_1.UnauthorizedException();
            return this.generateTokens(user);
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
    }
    extractTokenFromHeader(authorization) {
        const [type, token] = authorization.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
    async getUserFromAccessToken(authorization) {
        const token = this.extractTokenFromHeader(authorization);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                ignoreExpiration: true,
            });
            return payload.sub;
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
    }
    async generateTokens(user) {
        const payload = { sub: user.id, email: user.email };
        const refreshToken = await this.jwtService.signAsync(payload, {
            secret: constants_1.jwtConstants.refreshTokenSecret,
            expiresIn: constants_1.jwtConstants.refreshTokenExpiresIn,
        });
        await this.usersService.setCurrentRefreshToken(refreshToken, user.id);
        return {
            userId: user.id,
            accessToken: await this.jwtService.signAsync(payload),
            refreshToken,
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map