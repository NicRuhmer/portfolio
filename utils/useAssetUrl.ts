import { useRuntimeConfig } from "@nuxt/app";

export function useAssetUrl() {
  const config = useRuntimeConfig();

  return {
    getAssetUrl: (path: string) =>
      `${config.app.baseURL}${path.startsWith("/") ? path.slice(1) : path}`,
  };
}
