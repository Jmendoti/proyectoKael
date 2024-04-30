import { Router } from "express";
import {login, register, logout, getProfiles, updateProfile, getProfile, verifyToken } from '../controllers/auth.controller.js'
import { authRequired } from "../midlewares/validationToken.js";
import { validateSchema } from "../midlewares/validator.midlewores.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post('/register',validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema) ,login)
router.post('/logout', logout)

router.get('/verify', verifyToken)

router.get('/profile', authRequired ,getProfiles)
router.put('/profile/:id', authRequired ,updateProfile)
router.get('/profile/:id', authRequired, getProfile)

export default router;