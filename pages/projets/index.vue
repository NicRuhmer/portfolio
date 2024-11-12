<template>
  <div class="bg-bkg text-content flex h-screen w-full flex-col overflow-auto scroll-smooth pt-20">
    <div class="mx-auto w-full max-w-[1200px] lg:px-6 px-0">
      <div class="px-4">
        <h2 @click="goBack"
          class="text-accent1 group my-3 flex cursor-pointer items-center gap-2 text-lg font-semibold transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-arrow-left transition-all duration-200 group-hover:inline-block group-hover:-translate-x-1">
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Heriniaina Ralison
        </h2>
        <h1 class="text-accent2 text-3xl lg:text-5xl font-semibold">All Projects</h1>
      </div>
      <div class="bg-bkg mt-8 hidden lg:block">
        <table class="w-full">
          <thead class="">
            <tr class="text-left">
              <th class="text-accent2 px-4 py-8 text-sm font-medium">Year</th>
              <th class="text-accent2 px-4 text-sm font-medium">Project</th>
              <th class="text-accent2 px-4 text-sm font-medium">Made at</th>
              <th class="text-accent2 px-4 text-sm font-medium">Progress</th>
              <th class="text-accent2 px-4 text-sm font-medium">Built with</th>
              <th class="text-accent2 px-4 text-sm font-medium">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in projects" :key="project.id"
              class="border-t border-gray-800 transition-all duration-300 ">
              <td class="text-accent2 px-4 py-8 text-sm">{{ project.year }}</td>
              <td class="text-accent1 px-4">{{ project.title }}</td>
              <td class="text-accent2 px-4 text-sm">{{ project.madeAt }}</td>
              <td class="text-content text-nowrap px-4 text-sm">{{ project.progress }}</td>
              <td class="px-4">
                <div class="flex flex-wrap gap-2 px-4">
                  <span v-for="tech in project.technologies" :key="tech"
                    class="text-accent1 bg-accent1/10 rounded-full px-3 py-1 text-sm">
                    {{ tech }}
                  </span>
                </div>
              </td>
              <td>
                <a v-if="project.link" :href="project.link" target="_blank"
                  class="hover:text-accent1 text-content group flex items-center gap-1 transition-all duration-300">
                  {{ project.linkText }}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-arrow-up-right group-hover:text-accent1 transition-all duration-300 group-hover:inline-block group-hover:-translate-y-1 group-hover:translate-x-1">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="lg:hidden">
        <div class="lg:hidden space-y-6 mt-8">
          <div v-for="project in projects" :key="project.id"
            class="hover:bg-accent1/5 group mt-3 flex w-full flex-col md:flex-row justify-between gap-6 rounded-lg bg-transparent px-5 py-6 backdrop-blur-lg transition-all duration-300 hover:!opacity-100 hover:shadow-lg hover:!blur-none [.hover-group:hover_&:not(:hover)]:opacity-50 [.hover-group:hover_&:not(:hover)]:blur-[.5px]">
            <div class="w-full md:w-2/6 shrink-0 text-sm">
              <img :src="project.image" :alt="project.alt_title" class="h-auto w-full rounded-lg" />
            </div>
            <div class="text-accent2 w-full md:w-4/6 cursor-pointer">
              <h2 @click="goToProject(project.link)"
                class="group-hover:text-accent1 text-md flex items-center gap-2 transition-colors duration-300">
                {{ project.title }}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-arrow-up-right transition-all duration-300 group-hover:inline-block group-hover:-translate-y-1 group-hover:translate-x-1">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </h2>
              <p class="text-content mt-2 text-sm">
                {{ project.description }}
              </p>
              <p class="text-content mt-2 flex flex-wrap gap-2 text-sm">
                <span v-for="tech in project.technologies" :key="tech"
                  class="bg-accent1/10 text-accent1 rounded-xl px-3 py-1 text-sm transition-colors duration-300">
                  {{ tech }}
                </span>
              </p>
              <a v-if="project.link" :href="project.link" target="_blank"
                class="hover:text-accent1 text-content group flex items-center gap-1 transition-all duration-300 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-link">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                {{ project.linkText }}
              </a>
              <div class="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                <span class="text-content group flex items-center gap-1 transition-all duration-300">
                  {{ project.madeAt }}</span>
                <span class="text-content hidden md:inline">,</span>
                <span class="text-content group flex items-center gap-1 transition-all duration-300">
                  {{ project.year }}</span>
                <span class="text-content hidden md:inline">,</span>
                <span class="text-content group flex items-center gap-1 transition-all duration-300">
                  {{ project.progress }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { projects } from '../../data/projects';

const router = useRouter();

const goToProject = (link: string) => {
  window.open(link, "_blank");
};

function goBack() {
  router.go(-1);
}
</script>


<style></style>