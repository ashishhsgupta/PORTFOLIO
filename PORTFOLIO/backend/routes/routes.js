import express from "express";
import { usersignin, usersignup }  from '../userController/userController.js';
const router=express.Router();


router.post('/signup', usersignup);
router.post('/signin', usersignin);


export default router;