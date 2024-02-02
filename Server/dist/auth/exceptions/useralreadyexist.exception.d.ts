import { BadRequestException } from '@nestjs/common';
export declare class UserAlreadyExistException extends BadRequestException {
    constructor(error?: string);
}
export declare class UserEmailAlreadyExistException extends BadRequestException {
    constructor(error?: string);
}
export declare class UserUsernameAlreadyExistException extends BadRequestException {
    constructor(error?: string);
}
