import { Router } from "express";
import userControllers from "../controllers/userControllers";

const router: Router = Router();

router.post('/', userControllers.createUser);

export default router;