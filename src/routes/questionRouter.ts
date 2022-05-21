import { Router } from "express";
import { check } from "express-validator";
import { questionController } from "../controllers";

const router = Router();

router.post("", [check("userId").notEmpty(), check("question").notEmpty()], questionController.createQuestion);
router.get("/:questionId/result", questionController.getResult);

export default router;
