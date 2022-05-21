import { Request, Response } from "express";
import { validationResult } from "express-validator";
import sc from "../modules/statusCode";
import rm from "../modules/responseMessage";
import drawRandom from "../modules/deciseRandom";
import { success, fail } from "../modules/util";
import { QuestionCreateDTO, DecisionCreateDTO } from "../interfaces/question/questionDTO";
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

    return res.status(sc.OK).send(success(sc.OK, rm.CREATE_QUESTION_SUCCESS, data));
  } catch (error) {
    console.log(error);

    return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

/**
 *  @route POST /question/:questionId/decision
 *  @desc 질문 결과 결정
 *  @access Public
 */
const createDecision = async (req: Request, res: Response) => {
  const { questionId } = req.params;
  const reqError = validationResult(req);

  if (!reqError.isEmpty()) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));

  const decisionCreateDTO: DecisionCreateDTO = req.body;

  try {
    await questionService.createDecision(questionId, decisionCreateDTO);

    return res.status(sc.OK).send(success(sc.OK, rm.CREATE_DECISION_SUCCESS));
  } catch (error) {
    console.log(error);

    return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

export default {
  createQuestion,
  createDecision,
};
