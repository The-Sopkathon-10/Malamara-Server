import { Router } from "express";
import questionRouter from "./questionRouter";
import userRouter from "./userRouter";

const router = Router();

router.use("/question", questionRouter);
router.use("/user", userRouter);

export default router;
