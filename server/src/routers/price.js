import express from "express";
import * as prices from "../controllers/price";
const router = express.Router();

router.get("/all", prices.getPrice);
export default router;
