import express from "express";
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRoutes from "./routes/userRoutes.js"
import productRoutes from "./routes/productRoutes.js"
import cartRoutes from "./routes/cartRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"

// App Config
const app = express()
const PORT = process.env.PORT || 4000

connectDB()
connectCloudinary()

//Middlwares
app.use(express.json())
app.use(cors())

//API Endpoints
app.get("/", (req, res)=>{
  res.send("The Backend API of E-commerce is working")
})
app.use("/api/user", userRoutes);
app.use("/api/product", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/order", orderRoutes)

app.listen(PORT, (req, res)=>console.log(`Server Started on PORT ${PORT}`))
