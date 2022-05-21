import mongoose from "mongoose";

export interface DecisionCreateDTO {
  userId: mongoose.Types.ObjectId;
  question: string;
  decision: string;
  isLiked: boolean;
}
