import express from "express";
import * as areas from "../controllers/area";
const router = express.Router();

router.get("/all", areas.getAreas);
export default router;
