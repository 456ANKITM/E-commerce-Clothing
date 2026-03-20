import express from "express"
import { addToCart, getUserCart, updateCart } from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";
const router = express.Router()

router.post("/addToCart", authUser, addToCart)
router.post("/updateCart", authUser, updateCart)
router.post("/getUserCart", authUser, getUserCart)

export default router;