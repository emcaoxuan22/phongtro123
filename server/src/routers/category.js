import express from "express";
import * as categories from "../controllers/category";
const router = express.Router();

router.get("/all", categories.getCategories);
export default router;
