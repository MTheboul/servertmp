export declare class PushService {
    constructor();
    sendNotification(subscription: any, dataToSend?: string): Promise<any>;
    getVapidPublicKey(): Promise<string>;
}
