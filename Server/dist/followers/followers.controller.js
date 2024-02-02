"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowersController = void 0;
const common_1 = require("@nestjs/common");
const followers_service_1 = require("./followers.service");
const auth_guard_1 = require("../auth/auth.guard");
const swagger_1 = require("@nestjs/swagger");
const follow_dto_1 = require("./dto/follow.dto");
let FollowersController = class FollowersController {
    constructor(followersService) {
        this.followersService = followersService;
    }
    followUser(followDto) {
        return this.followersService.followUser(followDto);
    }
    unfollowUser(followDto) {
        return this.followersService.unfollowUser(followDto);
    }
};
exports.FollowersController = FollowersController;
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('follow'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [follow_dto_1.FollowDto]),
    __metadata("design:returntype", void 0)
], FollowersController.prototype, "followUser", null);
__decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)('unfollow'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [follow_dto_1.FollowDto]),
    __metadata("design:returntype", void 0)
], FollowersController.prototype, "unfollowUser", null);
exports.FollowersController = FollowersController = __decorate([
    (0, swagger_1.ApiTags)('followers'),
    (0, common_1.Controller)('followers'),
    __metadata("design:paramtypes", [followers_service_1.FollowersService])
], FollowersController);
//# sourceMappingURL=followers.controller.js.map