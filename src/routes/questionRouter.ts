import { Router } from "express";
import { check } from "express-validator";
import { questionController } from "../controllers";

const router = Router();

router.post("", [check("userId").notEmpty(), check("question").notEmpty()], questionController.createQuestion);
router.post("/:questionId/decision", [check("decision").notEmpty()], questionController.createDecision);

export default router;
