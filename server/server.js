import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import connectDB from "./configs/db.js";
import "dotenv/config";
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import addressRouter from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { stripeWebhooks } from "./controllers/orderController.js";

const app = express();
const port = process.env.PORT || 4000;

// ✅ Database + Cloudinary
await connectDB();
await connectCloudinary();

// ✅ Allowed frontend origins
const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://green-cart-app-liart.vercel.app", // deployed frontend
];

// ✅ Stripe webhook route must come BEFORE express.json()
app.post("/stripe", express.raw({ type: "application/json" }), stripeWebhooks);

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());

// ✅ Use CORS middleware (cleaner than manual headers)
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Routes
app.get("/", (req, res) => res.send("API is working!"));
app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);
app.use("/api/order", orderRouter);

// ✅ Server listen
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
