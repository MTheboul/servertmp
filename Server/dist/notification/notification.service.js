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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const webpush_service_1 = require("./webpush.service");
const prisma_service_1 = require("../prisma.service");
let NotificationService = class NotificationService {
    constructor(pushService, prisma) {
        this.pushService = pushService;
        this.prisma = prisma;
    }
    async createSubscriptionIfNotExist(where, userId, subscriptionDto, throwError) {
        const recipe = await this.prisma.subscription.findFirst({ where });
        if (!recipe) {
            return await this.prisma.subscription.create({
                data: {
                    endpoint: subscriptionDto.endpoint,
                    expirationTime: subscriptionDto.expirationTime,
                    keys: subscriptionDto.keys,
                    user: {
                        connect: {
                            id: userId,
                        },
                    },
                },
            });
        }
        if (throwError)
            throw throwError();
    }
    async subscribe(userId, subscriptionDto) {
        await this.createSubscriptionIfNotExist({
            endpoint: subscriptionDto.endpoint,
        }, userId, subscriptionDto);
    }
    async sendNotificationToUser(userId, payload) {
        const subscriptions = await this.prisma.subscription.findMany({
            where: {
                userId,
            },
        });
        if (subscriptions.length === 0)
            return;
        subscriptions.forEach((subscription) => {
            this.sendNotification({
                endpoint: subscription.endpoint,
                expirationTime: subscription.expirationTime,
                keys: subscription.keys,
            }, payload).catch((error) => console.error(error));
        });
    }
    async sendNotification(subscriptionDto, payload) {
        return this.pushService.sendNotification(subscriptionDto, JSON.stringify(payload));
    }
    async getVapidPublicKey() {
        return this.pushService.getVapidPublicKey();
    }
};
exports.NotificationService = NotificationService;
exports.NotificationService = NotificationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [webpush_service_1.PushService,
        prisma_service_1.PrismaService])
], NotificationService);
//# sourceMappingURL=notification.service.js.map