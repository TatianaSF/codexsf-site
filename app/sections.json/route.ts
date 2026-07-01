import { getSectionsFeed } from "@/lib/aiFeeds";

export const dynamic = "force-static";

export function GET() {
  return Response.json(getSectionsFeed(), {
    headers: {
      "Cache-Control": "public, max-age=3600"
    }
  });
}
