import { BadRequestException } from '@nestjs/common';
export declare class FollowerAlreadyExistException extends BadRequestException {
    constructor(error?: string);
}
