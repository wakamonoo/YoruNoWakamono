

export async function POST(request) {
  try {
    const { messages } = await request.json();
    const apikey = process.env.GEMINI_API_KEY;

    if (!apikey) {
      return Response.json(
      {
        success: false,
        message: "gemini api key is not configured",
      },
      { status: 500 },
    );
    }

    const contents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apikey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.7,
          },
        }),
      },
    );

    if (!response.ok) {
      const text = await response.text();
      return Response.json(
      {
        success: false,
        message: `api errror: ${text}`,
      },
      { status: 500 },
    );
    }

    const data = await response.json();

    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    return Response.json({
      success: true,
      message: "story added succesfully",
      result: text,
    });
  } catch (err) {
    console.error("api error", err);
    return Response.json(
      {
        success: false,
        message: "api errror: err",
      },
      { status: 500 },
    );
  }
};

