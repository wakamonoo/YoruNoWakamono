import clientPromise from "@/lib/ancestory/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const mongodb = process.env.ANCESTORY_MONGODB;
    const db = client.db(mongodb);

    const storiesCount = await db.collection("stories").countDocuments();

    return Response.json({
      success: true,
      storiesCount,
    });
  } catch (err) {
    console.error("error fetching stories count", err);
    return Response.json(
      {
        success: false,
        message: "error fetching stories count",
      },
      { status: 500 },
    );
  }
}
