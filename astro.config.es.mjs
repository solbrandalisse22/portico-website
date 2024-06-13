import shared from "./astro.config.shared.mjs";
import { defineConfig } from "astro/config";

export default defineConfig({
  ...shared,
  site: "https://www.porticosport.es",
  srcDir: "./src/es",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "fr", "it", "de"],
    routing: {
      prefixDefaultLocale: false,
    },
    domains: {
      de: "https://porticosport.de",
      fr: "https://porticosport.fr",
      en: "https://porticosport.com",
      it: "https://porticosport.it",
    },
  },
  experimental: {
    i18nDomains: true,
  },
  redirects: {
    'https://porticosport.es/:path*': {
      status: 301,
      destination: 'https://www.porticosport.es/:path*'
    }
  }
});
