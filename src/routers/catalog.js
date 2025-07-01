import { main_page, info_page, error_page } from "../controllers/catalog.js";
import { Router } from "express";
const router = Router();

router.get("/", main_page);
router.get("/:id", info_page, error_page);

export default router;
