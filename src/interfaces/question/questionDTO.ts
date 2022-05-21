import mongoose from "mongoose";

export interface QuestionCreateDTO {
  userId: mongoose.Types.ObjectId;
  question: string;
  choices?: string[];
}

export interface DecisionCreateDTO {
  decision: string;
}
