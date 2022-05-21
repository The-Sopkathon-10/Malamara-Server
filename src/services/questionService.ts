import { QuestionCreateDTO, DecisionCreateDTO } from "../interfaces/question/questionDTO";
import { BaseResponseDTO } from "../interfaces/base/baseDTO";
import Question from "../models/Question";

/**
 * @질문_생성
 */
const createQuestion = async (questionCreateDTO: QuestionCreateDTO) => {
  try {
    const question = new Question({
      user: questionCreateDTO.userId,
      question: questionCreateDTO.question,
    });

    await question.save();

    const data: BaseResponseDTO = {
      _id: question.id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * @질문_결과
 */
const createDecision = async (questionId: string, decisionCreateDTO: DecisionCreateDTO) => {
  try {
    await Question.findByIdAndUpdate(questionId, decisionCreateDTO);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  createQuestion,
  createDecision,
};
