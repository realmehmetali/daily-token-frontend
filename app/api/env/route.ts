export function GET() {
    return new Response(
      JSON.stringify({
        NEXT_PUBLIC_HUB: process.env.NEXT_PUBLIC_HUB ?? null,
        NEXT_PUBLIC_WORLD_ID_APP_ID: process.env.NEXT_PUBLIC_WORLD_ID_APP_ID ?? null,
        NEXT_PUBLIC_WORLD_ID_ACTION: process.env.NEXT_PUBLIC_WORLD_ID_ACTION ?? null,
      }),
      { headers: { "content-type": "application/json" } }
    );
  }