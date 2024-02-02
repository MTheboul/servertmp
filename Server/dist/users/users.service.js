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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const useralreadyexist_exception_1 = require("../auth/exceptions/useralreadyexist.exception");
const prisma_service_1 = require("../prisma.service");
const crypto_1 = require("crypto");
const auth_provider_1 = require("../auth/providers/auth.provider");
function hash(string) {
    return (0, crypto_1.createHash)('sha256').update(string).digest('hex');
}
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        return this.prisma.extended.user.create({
            data: createUserDto,
        });
    }
    async createIfNotExist(where, createUserDto, throwError) {
        const user = await this.prisma.user.findFirst({ where });
        if (!user) {
            return this.create(createUserDto);
        }
        if (throwError)
            throw throwError();
        else
            throw new useralreadyexist_exception_1.UserAlreadyExistException();
    }
    async updateById(id, user) {
        return this.prisma.extended.user.update({
            data: user,
            where: { id },
        });
    }
    async update(params) {
        const { where, data } = params;
        return this.prisma.user.update({ where, data });
    }
    async delete(id) {
        return this.prisma.user.delete({
            where: { id },
        });
    }
    async findAll() {
        return this.prisma.user.findMany();
    }
    async findOneById(id, include) {
        return await this.findUnique({
            where: { id },
            include,
        });
    }
    async extendFindOneBy(args) {
        return await this.prisma.extended.user.findUnique(args);
    }
    async extendFindOneById(id) {
        return await this.extendFindOneBy({
            where: { id },
            include: {
                followers: true,
                following: true,
            },
        });
    }
    async findOneByUsername(username) {
        return await this.findUnique({
            where: { username },
        });
    }
    async findOneByEmail(email) {
        return await this.prisma.user.findFirst({
            where: { email },
        });
    }
    async findUnique(args) {
        return await this.prisma.user.findUnique(args);
    }
    async setCurrentRefreshToken(refreshToken, userId) {
        const currentHashedRefreshToken = hash(refreshToken);
        await this.prisma.user.update({
            where: { id: userId },
            data: {
                refreshToken: currentHashedRefreshToken,
            },
        });
    }
    async getUserIfRefreshTokenMatches(refreshToken, userId) {
        const user = await this.extendFindOneById(userId);
        const hashedRefreshToken = hash(refreshToken);
        const isRefreshTokenMatching = hashedRefreshToken === user.refreshToken;
        if (isRefreshTokenMatching) {
            return user;
        }
        return undefined;
    }
    async checkPasswordMatched(user, password, errorMessage = 'Invalid email address or password') {
        const isPasswordMatched = await auth_provider_1.AuthProvider.comparePassword(password, user);
        if (!isPasswordMatched) {
            throw new common_1.BadRequestException(errorMessage);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map