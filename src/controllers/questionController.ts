import { Request, Response } from "express";
import { validationResult } from "express-validator";
import sc from "../modules/statusCode";
import rm from "../modules/responseMessage";
import drawRandom from "../modules/deciseRandom";
import { success, fail } from "../modules/util";
import { QuestionCreateDTO } from "../interfaces/question/questionDTO";
import { questionService } from "../services";

/**
 *  @route POST /question
 *  @desc 질문 생성
 *  @access Public
 */
const createQuestion = async (req: Request, res: Response) => {
  const reqError = validationResult(req);

  if (!reqError.isEmpty()) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));

  const questionCreateDTO: QuestionCreateDTO = req.body;

  try {
    const data = await questionService.createQuestion(questionCreateDTO);

    return res.status(sc.CREATED).send(success(sc.CREATED, rm.CREATE_QUESTION_SUCCESS, data));
  } catch (error) {
    console.log(error);

    return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

/**
 *  @route GET /qusetion/:questionId/result
 *  @desc 질문 결과 조회
 *  @access Public
 */
const getResult = async (req: Request, res: Response) => {
  const { questionId } = req.params;

  try {
    const choices = await questionService.getChoices(questionId);

    if (!choices) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_QUESTION));

    const result = drawRandom(choices);

    return res.status(sc.OK).send(success(sc.OK, rm.READ_RESULT_SUCCESS, { result }));
  } catch (error) {
    console.log(error);

    return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

export default {
  createQuestion,
  getResult,
};
