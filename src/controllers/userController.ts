import { Request, Response } from "express";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import { success, fail } from "../modules/util";
import { userService } from "../services";

/**
 *  @route GET /user/:userId/decision
 *  @desc 유저 결정 리스트 조회
 *  @access Public
 */

const getUserDecisions = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const data = await userService.getUserDecisions(userId);

    if (!data) {
      return res.status(statusCode.NOT_FOUND).send(fail(statusCode.NOT_FOUND, message.NO_USER));
    }
    res.status(statusCode.OK).send(success(statusCode.OK, message.READ_USER_QUESTIONS_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  getUserDecisions,
};
