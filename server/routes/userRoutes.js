import express from "express";
import verifyToken from "../middleware/auth.js";
import getUser from "../controllers/user/getUser.js";
import getUserFriends from "../controllers/user/getUserFriends.js";
import addRemoveFriend from '../controllers/user/addRemoveFriend.js'

const router = express.Router();

router.get('/:id', verifyToken, getUser)
router.post('/:id/friends', verifyToken, getUserFriends);
router.post('/:id/:friendId', verifyToken, addRemoveFriend);

export default router;