import { useRuntimeConfig } from "#app";

export function useAssetUrl() {
  const config = useRuntimeConfig();

  console.log(config);
  return {
    getAssetUrl: (path: string) =>
      `${config.app.baseURL}${path.startsWith("/") ? path.slice(1) : path}`,
  };
}
