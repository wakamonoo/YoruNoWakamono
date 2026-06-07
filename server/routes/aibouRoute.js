import express from "express";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

router.post("/aibou", async (req, res) => {
  try {
    const { messages } = req.body;
    const apikey = process.env.GEMINI_API_KEY;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apikey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: messages.map((m) => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [
              {
                text: m.content,
              },
            ],
          })),
          generationConfig: {
            temperature: 0.7,
          },
        }),
      },
    );

    if (!response.ok) {
      const text = await response.text();
      return res.status(500).json({ error: `api errror: ${text}` });
    }

    const data = await response.json();

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    res.status(200).json({ result: text });
  } catch (err) {
    console.error("api error", err);
    res.status(500).json({ error: "internal error:", err });
  }
});

export default router;
