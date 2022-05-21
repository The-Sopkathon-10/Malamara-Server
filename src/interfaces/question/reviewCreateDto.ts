import { UserInfo } from "../user/userInfo";

export interface reviewCreateDto {
    user?: UserInfo;
    question?: string;
    decision?: string;
    review: string;
}