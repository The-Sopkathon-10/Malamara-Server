import mongoose from "mongoose";

export interface userQuestionsResponseDto {
  nickname: string;
  profileImage: string;
  count: number;
  questions: userQuestions[];
}

export interface userQuestions {
  id: mongoose.Types.ObjectId;
  question: string;
  decision: string;
  review: string;
  isExecuted: boolean;
}
