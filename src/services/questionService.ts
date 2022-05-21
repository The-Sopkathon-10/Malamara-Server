import { QuestionCreateDTO, ChoicesDTO } from "../interfaces/question/questionDTO";
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
 * @선택지_조회
 */
const getChoices = async (questionId: string) => {
  try {
    const data: ChoicesDTO | null = await Question.findById(questionId, "choices -_id");

    if (!data) return null;

    const { choices } = data;

    if (!choices.length) return ["yes", "no"];
    return choices;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  createQuestion,
  getChoices,
};
