import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdatePasswordUserDto } from './dto/update-password.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): any;
    getUserById(userId: number): Promise<{
        id: number;
        email: string;
        username: string;
        bio: string;
        password: string;
        refreshToken: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateUser(userId: number, updateUserDto: UpdateUserDto): Promise<{
        id: number;
        email: string;
        username: string;
        bio: string;
        password: string;
        refreshToken: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    changePassword(userId: number, updatePasswordDto: UpdatePasswordUserDto): Promise<{
        id: number;
        email: string;
        username: string;
        bio: string;
        password: string;
        refreshToken: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
