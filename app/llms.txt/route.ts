import { getLlmsTxt } from "@/lib/aiFeeds";

export const dynamic = "force-static";

export function GET() {
  return new Response(getLlmsTxt(), {
    headers: {
      "Cache-Control": "public, max-age=3600",
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
