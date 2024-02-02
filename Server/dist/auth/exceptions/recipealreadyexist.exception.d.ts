import { BadRequestException } from '@nestjs/common';
export declare class RecipeAlreadyExistException extends BadRequestException {
    constructor(error?: string);
}
export declare class RecipeEmailAlreadyExistException extends BadRequestException {
    constructor(error?: string);
}
export declare class RecipeRecipenameAlreadyExistException extends BadRequestException {
    constructor(error?: string);
}
