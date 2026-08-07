import { apps } from "@/lib/apps";
import { listGuideMetas } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";

// llms.txt (llmstxt.org convention): a plain-text index for AI crawlers/agents
// (GPTBot, ClaudeBot, Google-Extended, PerplexityBot, etc.) to quickly find the
// site's real content — generated from the same data (lib/apps.ts, guides
// frontmatter) that drives the human-facing pages, so it never drifts.
export async function GET() {
  const lines: string[] = [];
  lines.push("# Mais1App");
  lines.push("");
  lines.push(
    "> Indie iOS app portfolio. Each app below has a free tier and an optional paid tier (IAP).",
  );
  lines.push("");

  for (const app of apps) {
    if (!app.href) continue; // apps without a landing page have nothing to index
    lines.push(`## ${app.slug}`);
    lines.push(`Landing: ${SITE_URL}${app.href}`);
    const metas = listGuideMetas(app.slug, "en");
    if (metas.length > 0) {
      lines.push("Guides:");
      for (const m of metas) {
        lines.push(
          `- ${m.title}: ${SITE_URL}${app.href}/guides/${m.slug} — ${m.description}`,
        );
      }
    }
    lines.push("");
  }

  lines.push("## Contact");
  lines.push(`${SITE_URL}/contact`);

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
