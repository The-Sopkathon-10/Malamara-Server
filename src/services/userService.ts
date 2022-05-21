import { BaseResponseDTO } from "../interfaces/base/baseDTO";
import { userCreateDto } from "../interfaces/user/userCreateDto";
import { userQuestions, userQuestionsResponseDto } from "../interfaces/user/userQuestionsResponseDto";
import Question from "../models/Question";
import User from "../models/User";

const createUser = async (user: userCreateDto): Promise<BaseResponseDTO> => {
  try {
    const newUser = new User({
      nickname: user.nickname,
    });

    await newUser.save();

    const data = {
      _id: newUser.id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getUserDecisions = async (userId: string): Promise<userQuestionsResponseDto | null> => {
  try {
    const questions = await Question.find({ user: userId })
      .sort({ createdAt: -1 })
      .populate("user", ["nickname", "profileImage"]);

    const questionsInfo: userQuestions[] = questions.map((obj) => ({
      _id: obj._id,
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
  createUser,
  getUserDecisions,
};
