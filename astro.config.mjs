// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import { serialize, filter } from "./src/lib/sitemap-meta.mjs";

export default defineConfig({
  site: "https://colakogluemlak48.com",
  output: "static",
  adapter: cloudflare({
    imageService: "passthrough",
  }),
  integrations: [
    sitemap({
      // Varsayılanlar yalnızca serialize() bir kural bulamazsa devreye girer.
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      // noindex sayfaları sitemap'ten çıkar (çelişen indeksleme sinyali olmasın)
      filter,
      // Sayfa türüne göre gerçek priority/changefreq + git geçmişinden gerçek lastmod
      serialize,
    }),
  ],
  vite: {
    server: {
      host: true,
      allowedHosts: [".trycloudflare.com", "localhost", "127.0.0.1"],
    },
  },
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
});
