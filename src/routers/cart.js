import { main_page } from "../controllers/catalog.js"; // заменить
import { Router } from "express";
const router = Router();

router.get("/", main_page);

export default router;
