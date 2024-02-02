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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const notification_service_1 = require("../notification/notification.service");
const followeralreadyexist_exception_1 = require("./exceptions/followeralreadyexist.exception");
let FollowersService = class FollowersService {
    constructor(prisma, notificationService) {
        this.prisma = prisma;
        this.notificationService = notificationService;
    }
    async followUser(followDto) {
        const found = await this.prisma.follower.findFirst({
            where: {
                followerId: followDto.followerId,
                followingId: followDto.followingId,
            },
        });
        if (found)
            throw new followeralreadyexist_exception_1.FollowerAlreadyExistException();
        this.notificationService.sendNotificationToUser(followDto.followingId, {
            title: 'Nouveau follower',
            body: 'Vous avez un nouveau follower',
            icon: 'https://cdn-icons-png.flaticon.com/512/3119/3119338.png',
        });
        return this.prisma.follower.create({
            data: {
                followerId: followDto.followerId,
                followingId: followDto.followingId,
            },
        });
    }
    async unfollowUser(followDto) {
        return this.prisma.follower.delete({
            where: {
                followerId_followingId: {
                    followerId: followDto.followerId,
                    followingId: followDto.followingId,
                },
            },
        });
    }
};
exports.FollowersService = FollowersService;
exports.FollowersService = FollowersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notification_service_1.NotificationService])
], FollowersService);
//# sourceMappingURL=followers.service.js.map