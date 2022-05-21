import { DecisionCreateDTO } from "../interfaces/question/questionDTO";
import Question from "../models/Question";
import { reviewCreateDto } from "../interfaces/question/reviewCreateDto";

/**
 * @질문_결과_결정
 */
const createDecision = async (decisionCreateDTO: DecisionCreateDTO) => {
  try {
    const question = new Question({
      user: decisionCreateDTO.userId,
      question: decisionCreateDTO.question,
      decision: decisionCreateDTO.decision,
      isExecuted: decisionCreateDTO.isLiked,
    });

    await question.save();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * @후기_생성
 */

const createReview = async (questionId: string, data: reviewCreateDto): Promise<void> => {
  try {
    await Question.findByIdAndUpdate(questionId, data);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  createDecision,
  createReview,
};
