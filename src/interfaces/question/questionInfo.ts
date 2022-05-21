import { UserInfo } from "../user/userInfo";

export interface QuestionInfo {
  user: UserInfo;
  question: string;
  choices: string[];
  decision: string;
  content: string;
}
