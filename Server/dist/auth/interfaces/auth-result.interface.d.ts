export interface IAuthResult {
    userId: number;
    accessToken: string;
    refreshToken: string;
}
export declare class AuthResult implements IAuthResult {
    userId: number;
    accessToken: string;
    refreshToken: string;
}
