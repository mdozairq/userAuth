import express from "express";
import {signup, login, profile} from '../controller/user.js'

const router = express.Router();

router.post('/login', login)
router.post('/signup', signup)
router.get('/profile', profile)

export default router;