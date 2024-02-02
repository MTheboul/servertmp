"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowersModule = void 0;
const common_1 = require("@nestjs/common");
const followers_service_1 = require("./followers.service");
const followers_controller_1 = require("./followers.controller");
const prisma_module_1 = require("../prisma.module");
const jwt_module_1 = require("../jwt/jwt.module");
const users_service_1 = require("../users/users.service");
const notification_service_1 = require("../notification/notification.service");
const webpush_service_1 = require("../notification/webpush.service");
let FollowersModule = class FollowersModule {
};
exports.FollowersModule = FollowersModule;
exports.FollowersModule = FollowersModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, jwt_module_1.JWTModule],
        providers: [followers_service_1.FollowersService, users_service_1.UsersService, notification_service_1.NotificationService, webpush_service_1.PushService],
        controllers: [followers_controller_1.FollowersController],
    })
], FollowersModule);
//# sourceMappingURL=followers.module.js.map