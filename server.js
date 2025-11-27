// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import songRoutes from "./routes/songRoutes.js";
import danceStyleRoutes from "./routes/danceStyleRoutes.js";
import favoritesRoutes from "./routes/favorites.js"; // ⬅️ NEW IMPORT

dotenv.config(); // Load environment variables from .env

const app = express();

// 🧩 Middlewares
app.use(cors());
app.use(express.json());

// 🚏 API Routes
app.use("/api/users", userRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/dancestyles", danceStyleRoutes);
app.use("/api/favorites", favoritesRoutes); // ⬅️ NEW ROUTE INTEGRATION

// NOTE: The lines below were duplicates and have been removed for cleanliness, 
// but since the original code had them, I've kept the integration point where 
// it makes sense (under "API Routes").

// 🌐 MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/danceApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err.message));

// 🏠 Default Route
app.get("/", (req, res) => {
  res.send("🎶 Welcome to the Dance App Backend API");
});

// 🚀 Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});