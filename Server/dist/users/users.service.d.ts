import { HttpException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma, User as UserModel } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<UserModel>;
    createIfNotExist(where: Prisma.UserWhereInput, createUserDto: CreateUserDto, throwError?: () => HttpException): Promise<UserModel>;
    updateById(id: number, user: Prisma.UserUpdateInput): Promise<UserModel>;
    update(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<UserModel>;
    delete(id: number): Promise<UserModel>;
    findAll(): Promise<UserModel[]>;
    findOneById(id: number, include?: Prisma.UserInclude): Promise<UserModel>;
    extendFindOneBy(args: Prisma.UserFindUniqueArgs): Promise<UserModel>;
    extendFindOneById(id: number): Promise<UserModel>;
    findOneByUsername(username: string): Promise<UserModel>;
    findOneByEmail(email: string): Promise<UserModel>;
    findUnique(args: Prisma.UserFindUniqueArgs): Promise<UserModel>;
    setCurrentRefreshToken(refreshToken: string, userId: number): Promise<void>;
    getUserIfRefreshTokenMatches(refreshToken: string, userId: number): Promise<{
        id: number;
        email: string;
        username: string;
        bio: string;
        password: string;
        refreshToken: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    checkPasswordMatched(user: UserModel, password: string, errorMessage?: string): Promise<void>;
}
