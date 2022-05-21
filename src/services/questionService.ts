import { QuestionCreateDTO } from "../interfaces/question/questionDTO";
import { BaseResponseDTO } from "../interfaces/base/baseDTO";
import Question from "../models/Question";

/**
 * @질문_생성
 */
const createQuestion = async (questionCreateDTO: QuestionCreateDTO) => {
  try {
    const question = new Question(questionCreateDTO);

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

export default {
  createQuestion,
};
