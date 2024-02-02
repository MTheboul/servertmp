import { User } from '@prisma/client';
export declare class AuthProvider {
    static generateHash(password: string): Promise<string>;
    static comparePassword(password: string, user: User): Promise<boolean>;
    static compare(data: string, encrypted: string): Promise<boolean>;
}
