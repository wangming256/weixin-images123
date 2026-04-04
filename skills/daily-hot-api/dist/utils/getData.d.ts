import type { Get, Post } from "../types.js";
export interface RequestResult<T = unknown> {
    fromCache: boolean;
    updateTime: string;
    data: T;
}
export declare const get: <T = unknown>(options: Get) => Promise<RequestResult<T>>;
export declare const post: <T = unknown>(options: Post) => Promise<RequestResult<T>>;
//# sourceMappingURL=getData.d.ts.map