import { User } from '@prisma/client';
export declare class UserDto implements User {
    id: number;
    email: string;
    username: string;
    password: string;
    refreshToken: string;
    createdAt: Date;
    updatedAt: Date;
    bio: string;
}
