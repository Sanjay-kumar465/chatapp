import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";

const __dirname = path.resolve();
const PORT = ENV.PORT || 3000;

app.use(express.json({ limit: "5mb" }));
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// ✅ SIMPLE HEALTH CHECK FOR RENDER
app.get("/", (req, res) => {
  res.send("Chatify backend is running 🚀");
});

// ❌ REMOVE frontend static serving on Render
// Frontend will be deployed separately on Vercel

server.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});
