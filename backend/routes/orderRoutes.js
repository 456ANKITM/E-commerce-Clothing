import express from "express"
import adminAuth from "../middleware/adminAuth.js";
import { getAllOrdersAdmin, getAlluserOrders, placeOrderCOD, placeOrderRazorpay, placeOrderStripe, updateOrderStatus, verifyStripe } from "../controllers/orderController.js";
import authUser from "../middleware/auth.js";

const router = express.Router ()

router.post("/getAllOrdersAdmin", adminAuth, getAllOrdersAdmin);
router.post("/updateOrderStatus", adminAuth, updateOrderStatus);
router.post("/placeOrderCOD", authUser, placeOrderCOD);
router.post("/placeOrderStripe", authUser, placeOrderStripe);
router.post("/placeOrderRazorpay", authUser, placeOrderRazorpay);
router.post("/getAllOrders", authUser, getAlluserOrders);
router.post("/verifyStripe", authUser, verifyStripe)

export default router;