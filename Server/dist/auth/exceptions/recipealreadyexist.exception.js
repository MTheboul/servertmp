"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeRecipenameAlreadyExistException = exports.RecipeEmailAlreadyExistException = exports.RecipeAlreadyExistException = void 0;
const common_1 = require("@nestjs/common");
class RecipeAlreadyExistException extends common_1.BadRequestException {
    constructor(error) {
        super('Recipe with that email or recipe name already exists', error);
    }
}
exports.RecipeAlreadyExistException = RecipeAlreadyExistException;
class RecipeEmailAlreadyExistException extends common_1.BadRequestException {
    constructor(error) {
        super('Recipe with that email already exists', error);
    }
}
exports.RecipeEmailAlreadyExistException = RecipeEmailAlreadyExistException;
class RecipeRecipenameAlreadyExistException extends common_1.BadRequestException {
    constructor(error) {
        super('Recipe with that recipe name already exists', error);
    }
}
exports.RecipeRecipenameAlreadyExistException = RecipeRecipenameAlreadyExistException;
//# sourceMappingURL=recipealreadyexist.exception.js.map