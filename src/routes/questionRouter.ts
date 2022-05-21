import { Router } from "express";
import { check } from "express-validator";
import { questionController } from "../controllers";

const router = Router();

router.post(
  "/decision",
  [check("userId").notEmpty(), check("question").notEmpty(), check("decision").notEmpty(), check("isLiked").notEmpty()],
  questionController.createDecision
);
router.put("/:questionId/review", [check("review").notEmpty()], questionController.createReview);

export default router;
