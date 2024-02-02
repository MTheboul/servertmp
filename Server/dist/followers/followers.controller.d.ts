import { FollowersService } from './followers.service';
import { FollowDto } from './dto/follow.dto';
export declare class FollowersController {
    private readonly followersService;
    constructor(followersService: FollowersService);
    followUser(followDto: FollowDto): Promise<{
        id: number;
        followerId: number;
        followingId: number;
    }>;
    unfollowUser(followDto: FollowDto): Promise<{
        id: number;
        followerId: number;
        followingId: number;
    }>;
}
