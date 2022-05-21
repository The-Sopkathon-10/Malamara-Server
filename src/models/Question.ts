import mongoose from "mongoose";
import { QuestionInfo } from "../interfaces/question/questionInfo";

const QuestionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
    question: {
      type: String,
      required: true,
    },
    decision: {
      type: String,
    },
    review: {
      type: String,
    },
    isExecuted: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<QuestionInfo & mongoose.Document>("Question", QuestionSchema);
