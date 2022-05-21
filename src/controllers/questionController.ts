import { Request, Response } from "express";
import { validationResult } from "express-validator";
import sc from "../modules/statusCode";
import rm from "../modules/responseMessage";
import drawRandom from "../modules/deciseRandom";
import { success, fail } from "../modules/util";
import { DecisionCreateDTO } from "../interfaces/question/questionDTO";
import { questionService } from "../services";
import { reviewCreateDto } from "../interfaces/question/reviewCreateDto";

/**
 *  @route POST /question/decision
 *  @desc 질문 결과 결정
 *  @access Public
 */
const createDecision = async (req: Request, res: Response) => {
  const reqError = validationResult(req);

  if (!reqError.isEmpty()) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));

  const decisionCreateDTO: DecisionCreateDTO = req.body;

  try {
    await questionService.createDecision(decisionCreateDTO);

    return res.status(sc.OK).send(success(sc.OK, rm.CREATE_DECISION_SUCCESS));
  } catch (error) {
    console.log(error);

    return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

/**
 *  @route PUT /question/:questionId/review
 *  @desc 질문 후기 작성
 *  @access Public
 */

const createReview = async (req: Request, res: Response) => {
  const review: reviewCreateDto = req.body;
  const { questionId } = req.params;

  const reqError = validationResult(req);
  if (!reqError.isEmpty()) return res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NULL_VALUE));

  try {
    await questionService.createReview(questionId, review);

    res.status(sc.OK).send(success(sc.OK, rm.CREATE_REVIEW_SUCCESS));
  } catch (error) {
    console.log(error);

    return res.status(sc.INTERNAL_SERVER_ERROR).send(fail(sc.INTERNAL_SERVER_ERROR, rm.INTERNAL_SERVER_ERROR));
  }
};

export default {
  createDecision,
  createReview,
};
