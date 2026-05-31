import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import aibouRoute from "./routes/aibouRoute.js";
import gitRoute from "./routes/gitRoute.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://wakamonoo.vercel.app",
  "https://wakamonoo.site",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

app.use(express.json());
app.use("/api/chatbot", aibouRoute);
app.use("/api/git", gitRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
