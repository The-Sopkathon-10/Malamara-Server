import { Router } from "express";
import { userController } from "../controllers";

const router: Router = Router();

router.get("/:userId", userController.getUserDecisions);

export default router;
