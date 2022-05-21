import { UserInfo } from "../user/userInfo";

export interface QuestionInfo {
  user: UserInfo;
  question: string;
  decision: string;
  content: string;
}
