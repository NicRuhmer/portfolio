<template>
  <div class="container mx-auto mt-20 h-screen w-full max-w-6xl items-center justify-center text-white">
    <h2 @click="goBack"
      class="group my-3 flex cursor-pointer items-center gap-2 text-lg font-semibold text-teal-400 transition-colors duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-arrow-left transition-all duration-200 group-hover:inline-block group-hover:-translate-x-1">
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
      Heriniaina Ralison
    </h2>
    <h1 class="text-5xl font-semibold">All Projects</h1>
    <div class="mt-8">
      <table class="w-full">
        <thead class="">
          <tr class="text-left">
            <th class="px-4 py-8 text-sm font-medium text-slate-200">Year</th>
            <th class="px-4 text-sm font-medium text-slate-200">Project</th>
            <th class="px-4 text-sm font-medium text-slate-200">Made at</th>
            <th class="px-4 text-sm font-medium text-slate-200">Progress</th>
            <th class="px-4 text-sm font-medium text-slate-200">Built with</th>
            <th class="px-4 text-sm font-medium text-slate-200">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects" :key="project.id"
            class="border-t border-gray-800 transition-all duration-300 hover:bg-black/20">
            <td class="px-4 py-8 text-sm text-slate-500">{{ project.year }}</td>
            <td class="px-4">{{ project.title }}</td>
            <td class="px-4 text-sm text-slate-500">{{ project.madeAt }}</td>
            <td class="text-nowrap px-4 text-sm text-slate-500">{{ project.progress }}</td>
            <td class="px-4">
              <div class="flex flex-wrap gap-2 px-4">
                <span v-for="tech in project.technologies" :key="tech"
                  class="rounded-full bg-gray-800 px-3 py-1 text-sm text-teal-400">
                  {{ tech }}
                </span>
              </div>
            </td>
            <td>
              <a v-if="project.link" :href="project.link" target="_blank"
                class="group flex items-center gap-1 text-gray-400 transition-all duration-300 hover:text-teal-400">
                {{ project.linkText }}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-arrow-up-right transition-all duration-300 group-hover:inline-block group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-teal-400">
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { projects } from '../../data/projects';

const router = useRouter();

function goBack() {
  router.go(-1);
}
</script>


<style></style>