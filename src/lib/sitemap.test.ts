import { describe, expect, test } from "bun:test";
import { sitemapXML } from "./sitemap";

describe("public sitemap", () => {
  test("uses the published Kamyorg origin and omits invented modification dates", () => {
    const xml = sitemapXML("https://kamyorg.lovable.app", [{ path: "/" }, { path: "/about" }]);
    expect(xml).toContain("<loc>https://kamyorg.lovable.app/</loc>");
    expect(xml).toContain("<loc>https://kamyorg.lovable.app/about</loc>");
    expect(xml).not.toContain("<lastmod>");
  });
  test("rejects external destinations", () => {
    expect(() => sitemapXML("https://kamyorg.lovable.app", [{ path: "//other.example/" }])).toThrow();
  });
});