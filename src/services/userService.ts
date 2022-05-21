import { BaseResponseDTO } from "../interfaces/base/baseDTO";
import { userQuestions, userQuestionsResponseDto } from "../interfaces/user/userQuestionsResponseDto";
import Question from "../models/Question";

const getUserDecisions = async (userId: string): Promise<userQuestionsResponseDto | null> => {
  try {
    const questions = await Question.find({ user: userId })
      .sort({ createdAt: -1 })
      .populate("user", ["nickname", "profileImage"]);

    const questionsInfo: userQuestions[] = questions.map((obj) => ({
      id: obj._id,
      question: obj.question,
      decision: obj.decision,
      review: obj.review ? obj.review : "",
      isExecuted: obj.isExecuted,
    }));

    const userAndQuestionInfo: userQuestionsResponseDto = {
      nickname: questions[0].user.nickname,
      profileImage: questions[0].user.profileImage,
      count: questionsInfo.length,
      questions: questionsInfo,
    };

    return userAndQuestionInfo;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getUserDecisions,
};
