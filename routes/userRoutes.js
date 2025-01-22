import express from 'express'
import { getLoginForm, getRegisterForm, login, register } from '../controllers/userControllers.js';

let router =express.Router();

//http://localhost:5000/api/v1/user/register
router.post("/register",register);
router.post("/login",login);
router.get("/login",getLoginForm);
router.get("/register",getRegisterForm);


export default router;