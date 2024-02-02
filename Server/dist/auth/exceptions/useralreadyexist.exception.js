"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUsernameAlreadyExistException = exports.UserEmailAlreadyExistException = exports.UserAlreadyExistException = void 0;
const common_1 = require("@nestjs/common");
class UserAlreadyExistException extends common_1.BadRequestException {
    constructor(error) {
        super('User with that email or username already exists', error);
    }
}
exports.UserAlreadyExistException = UserAlreadyExistException;
class UserEmailAlreadyExistException extends common_1.BadRequestException {
    constructor(error) {
        super('User with that email already exists', error);
    }
}
exports.UserEmailAlreadyExistException = UserEmailAlreadyExistException;
class UserUsernameAlreadyExistException extends common_1.BadRequestException {
    constructor(error) {
        super('User with that username already exists', error);
    }
}
exports.UserUsernameAlreadyExistException = UserUsernameAlreadyExistException;
//# sourceMappingURL=useralreadyexist.exception.js.map