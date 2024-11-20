<template>
  <div
    class="hover:bg-accent1/5 group mt-3 flex w-full justify-between gap-6 rounded-lg bg-transparent px-5 py-6 backdrop-blur-lg transition-all duration-300 hover:!opacity-100 hover:shadow-lg hover:!blur-none [.hover-group:hover_&:not(:hover)]:opacity-50 [.hover-group:hover_&:not(:hover)]:blur-[.5px]">
    <div class="w-2/6 shrink-0 text-sm">
      <NuxtImg :src="`/images/${image.replace(/^\/?(images\/)?/, '')}`" :alt="alt_title"
        class="h-auto w-full rounded-lg" quality="80" />
    </div>
    <div class="text-accent2 w-4/6 cursor-pointer">
      <h2 @click="goToProject(link)"
        class="group-hover:text-accent1 text-md flex items-center gap-2 transition-colors duration-300">
        {{ title }}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-arrow-up-right transition-all duration-300 group-hover:inline-block group-hover:-translate-y-1 group-hover:translate-x-1">
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      </h2>
      <p class="text-content mt-2 text-sm">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAssetUrl } from "../utils/useAssetUrl";

const { getAssetUrl } = useAssetUrl();

defineProps<{
  image: string;
  alt_title: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}>();

const goToProject = (link: string) => {
  window.open(link, "_blank");
};
</script>
