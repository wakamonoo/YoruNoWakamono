import express from "express";
import clientPromise from "../lib/mongodb.js";

const router = express.Router();

router.get("/countData", async (req, res) => {
  try {
    const client = await clientPromise;
    const mongodb = process.env.MONGODB;
    const db = client.db(mongodb);

    const usersCount = await db.collection("users").countDocuments();
    const titlesCount = await db.collection("titles").countDocuments();

    const titles = await db
      .collection("titles")
      .find({}, { projection: { reviews: 1 } })
      .toArray();

    const reviewsCount = titles.reduce(
      (total, title) => total + (title.reviews?.length || 0),
      0,
    );

    res.status(200).json({
      usersCount,
      titlesCount,
      reviewsCount,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "error fetching count" });
  }
});

export default router;
