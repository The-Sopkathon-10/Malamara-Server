import express, { Request, Response } from "express";
import { userCreateDto } from "../interfaces/user/UserCreateDto";
import statusCode from "../modules/statusCode";
import message from "../modules/responseMessage";
import { success, fail } from "../modules/util";
import { userService } from "../services";
import { validationResult } from "express-validator";

/**
 *  @route POST /user
 *  @desc   유저 생성
 *  @access Public
 */

const createUser = async (req: Request, res: Response) => {
  const error = await validationResult(req);

  if (!error.isEmpty()) {
    return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }
  const user: userCreateDto = req.body;
  try {
    const data = await userService.createUser(user);

    res.status(statusCode.OK).send(success(statusCode.OK, message.CREATED_USER_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

/**
 *  @route GET /user/:userId/decision
 *  @desc   유저 결정 리스트 조회
 *  @access Public
 */

const getUserDecisions = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const data = await userService.getUserDecisions(userId);


    if (!data) {
      return res.status(statusCode.NOT_FOUND).send(fail(statusCode.NOT_FOUND, message.READ_USER_QUESTIONS_FAIL));
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
  createUser,
  getUserDecisions,
};
