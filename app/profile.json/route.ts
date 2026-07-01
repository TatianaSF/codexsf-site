import { getProfileFeed } from "@/lib/aiFeeds";

export const dynamic = "force-static";

export function GET() {
  return Response.json(getProfileFeed(), {
    headers: {
      "Cache-Control": "public, max-age=3600"
    }
  });
}
