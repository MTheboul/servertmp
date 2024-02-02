"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowerAlreadyExistException = void 0;
const common_1 = require("@nestjs/common");
class FollowerAlreadyExistException extends common_1.BadRequestException {
    constructor(error) {
        super('The follower already follow the following user', error);
    }
}
exports.FollowerAlreadyExistException = FollowerAlreadyExistException;
//# sourceMappingURL=followeralreadyexist.exception.js.map