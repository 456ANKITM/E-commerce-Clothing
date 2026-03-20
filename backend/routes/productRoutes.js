import express from "express"
import { addProduct, deleteProduct, getAllProducts, getProductById } from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router()

router.post("/addProduct", upload.fields([{name:"image1", maxCount:1},{name:"image2", maxCount:1},{name:"image3", maxCount:1},{name:"image4", maxCount:1}]), adminAuth, addProduct) 
router.post("/deleteProduct", adminAuth, deleteProduct)
router.get("/getAllProducts", getAllProducts)
router.get("/getProductById", getProductById)

export default router;