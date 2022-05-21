import { QuestionInfo } from "../question/questionInfo";

export interface UserInfo {
  nickname: string;
  questions: QuestionInfo[];
}
