import { Router } from "express";
import { body } from "express-validator/check";
import { userController } from "../controllers";

const router: Router = Router();

router.post("/", [body("nickname").notEmpty()], userController.createUser);

export default router;
