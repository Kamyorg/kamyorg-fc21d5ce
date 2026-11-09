import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { sitemapXML } from "./sitemap";

describe("public sitemap", () => {
  test("uses the published Kamyorg origin and omits invented modification dates", () => {
    const xml = sitemapXML("https://kamyorg.lovable.app", [{ path: "/" }, { path: "/about" }]);
    assert.ok(xml.includes("<loc>https://kamyorg.lovable.app/</loc>"));
    assert.ok(xml.includes("<loc>https://kamyorg.lovable.app/about</loc>"));
    assert.ok(!xml.includes("<lastmod>"));
  });
  test("rejects external destinations", () => {
    assert.throws(() => sitemapXML("https://kamyorg.lovable.app", [{ path: "//other.example/" }]));
  });
});