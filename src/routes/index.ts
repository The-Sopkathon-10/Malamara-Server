import { Router } from "express";
import questionRouter from "./questionRouter";

const router = Router();

router.use("/question", questionRouter);

export default router;
