import express from 'express'
import { getLoginForm, getRegisterForm, login, register } from '../controllers/userControllers.js';

let router =express.Router();


router.get("/register",getRegisterForm);
router.post("/register",register);
router.get("/login",getLoginForm);
router.post("/login",login);


export default router;