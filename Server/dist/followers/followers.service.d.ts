import { PrismaService } from 'src/prisma.service';
import { Follower as FollowerModel } from '@prisma/client';
import { FollowDto } from './dto/follow.dto';
import { NotificationService } from 'src/notification/notification.service';
export declare class FollowersService {
    private prisma;
    private notificationService;
    constructor(prisma: PrismaService, notificationService: NotificationService);
    followUser(followDto: FollowDto): Promise<FollowerModel>;
    unfollowUser(followDto: FollowDto): Promise<FollowerModel>;
}
