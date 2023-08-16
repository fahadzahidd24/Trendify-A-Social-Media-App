import express from "express";
import register from "../controllers/userAuth/register.js";
import login from "../controllers/userAuth/login.js";
import upload from '../utils/multer.js';

const router = express.Router();

router.post('/register', upload.single('picture'), register)
router.post('/login', login);

export default router;