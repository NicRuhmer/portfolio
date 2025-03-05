import type { RuntimeConfig } from "@nuxt/schema";

export function useAssetUrl() {
  const config = {
    app: {
      baseURL: "/portfolio/",
    },
  } as RuntimeConfig;

  return {
    getAssetUrl: (path: string) =>
      `${config.app.baseURL}${path.startsWith("/") ? path.slice(1) : path}`,
  };
}
