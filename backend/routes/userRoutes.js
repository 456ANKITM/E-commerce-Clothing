import express from "express"
import { adminLogin, loginUser, registerUser } from "../controllers/userController.js"

const router = express.Router()

router.post("/login", loginUser)
router.post("/register", registerUser)
router.post("/admin", adminLogin)


export default router; 