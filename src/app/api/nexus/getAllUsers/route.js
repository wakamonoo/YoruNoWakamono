import clientPromise from "@/lib/nexus/mongodb"

export async function GET() {
  try {
    const client = await clientPromise;
    const mongodb = process.env.NEXUS_MONGODB;
    const db = client.db(mongodb);

    const result = await db.collection("users").find({}).toArray();

    return Response.json({
      success: true,
      result,
    });
  } catch (err) {
    console.error("error fetching users count", err);
    return Response.json(
      {
        success: false,
        message: "error fetching users count",
      },
      { status: 500 },
    );
  }
}
