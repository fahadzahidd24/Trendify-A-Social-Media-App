import express from "express";
import upload from '../utils/multer.js';
import verifyToken from "../middleware/auth.js";
import createPost from "../controllers/post/createPost.js";
import getFeedPosts from "../controllers/post/getFeedPosts.js";
import getUserPosts from "../controllers/post/getUserPosts.js";
import likePost from "../controllers/post/likePost.js";

const router = express.Router();

router.get('/', verifyToken, getFeedPosts);
router.post('/createPost', upload.single('picture'), verifyToken, createPost);
router.get('/:userId/posts', verifyToken, getUserPosts);
router.patch('/:id/like', verifyToken, likePost);

export default router;