import { HttpException } from '@nestjs/common';
import { PushService } from './webpush.service';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { NotificationDto } from './dto/notification.dto';
export declare class NotificationService {
    private readonly pushService;
    private prisma;
    constructor(pushService: PushService, prisma: PrismaService);
    createSubscriptionIfNotExist(where: Prisma.SubscriptionWhereInput, userId: number, subscriptionDto: any, throwError?: () => HttpException): Promise<{
        id: number;
        userId: number;
        endpoint: string;
        keys: Prisma.JsonValue;
        expirationTime: Date;
        createdAt: Date;
    }>;
    subscribe(userId: number, subscriptionDto: any): Promise<void>;
    sendNotificationToUser(userId: number, payload: NotificationDto): Promise<void>;
    sendNotification(subscriptionDto: any, payload: NotificationDto): Promise<any>;
    getVapidPublicKey(): Promise<string>;
}
