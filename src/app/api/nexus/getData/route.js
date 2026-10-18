import clientPromise from "@/lib/nexus/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const mongodb = process.env.NEXUS_MONGODB;
    const db = client.db(mongodb);

    const usersCount = await db.collection("users").countDocuments();
    const titlesCount = await db.collection("titles").countDocuments();
    const postsCount = await db.collection("posts").countDocuments();
    const listsCount = await db.collection("lists").countDocuments();
    const messagesCount = await db.collection("messages").countDocuments();

    const titles = await db
      .collection("titles")
      .find({}, { projection: { reviews: 1 } })
      .toArray();

    const reviewsCount = titles.reduce(
      (total, title) => total + (title.reviews?.length || 0),
      0,
    );

    return Response.json({
      success: true,
      usersCount,
      titlesCount,
      postsCount,
      listsCount,
      messagesCount,
      reviewsCount,
    });
  } catch (err) {
    console.error("error fetching data", err);
    return Response.json(
      {
        success: false,
        message: "error fetching data",
      },
      { status: 500 },
    );
  }
}
