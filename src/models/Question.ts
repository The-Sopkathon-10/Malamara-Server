import mongoose from "mongoose";
import { QuestionInfo } from "../interfaces/question/questionInfo";

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  choices: {
    type: [String],
  },
  decision: {
    type: String,
  },
  content: {
    type: String,
  },
});

export default mongoose.model<QuestionInfo & mongoose.Document>("Question", QuestionSchema);
