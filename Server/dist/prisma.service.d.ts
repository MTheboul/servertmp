import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    private _prisma;
    constructor();
    get extended(): import(".prisma/client/runtime/library").DynamicClientExtensionThis<import(".prisma/client").Prisma.TypeMap<import(".prisma/client/runtime/library").InternalArgs & {
        result: {
            user: {
                password: () => {
                    needs: {};
                    compute: () => any;
                };
                refreshToken: () => {
                    needs: {};
                    compute: () => any;
                };
                email: () => {
                    needs: {};
                    compute: () => any;
                };
                createdAt: () => {
                    needs: {};
                    compute: () => any;
                };
                updatedAt: () => {
                    needs: {};
                    compute: () => any;
                };
            };
        };
        model: {};
        query: {};
        client: {};
    }>, import(".prisma/client").Prisma.TypeMapCb, {
        result: {
            user: {
                password: () => {
                    needs: {};
                    compute: () => any;
                };
                refreshToken: () => {
                    needs: {};
                    compute: () => any;
                };
                email: () => {
                    needs: {};
                    compute: () => any;
                };
                createdAt: () => {
                    needs: {};
                    compute: () => any;
                };
                updatedAt: () => {
                    needs: {};
                    compute: () => any;
                };
            };
        };
        model: {};
        query: {};
        client: {};
    }>;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
