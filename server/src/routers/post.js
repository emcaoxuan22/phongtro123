import * as controllerPost from "../controllers/post";
import express from "express";

const router = express.Router();

router.get("/all", controllerPost.getPosts);
router.get("/limit", controllerPost.getPostsLimit);

export default router;
