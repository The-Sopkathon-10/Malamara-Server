import { QuestionInfo } from "../question/questionInfo";
import { UserInfo } from "./userInfo";

export interface userQuestionsResponseDto{
    nickname: string;
    questions: userQuestions[];  
}

export interface userQuestions {
    question: string;
    decision: string;   
    review?: string;
}