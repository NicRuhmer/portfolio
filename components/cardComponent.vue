<template>
    <div
        class="group mt-3 flex w-full justify-between rounded-lg px-5 py-6 backdrop-blur-lg transition-all duration-300 hover:bg-black/20 hover:!opacity-100 hover:shadow-lg hover:!blur-none [.hover-group:hover_&:not(:hover)]:opacity-50 [.hover-group:hover_&:not(:hover)]:blur-[.5px]">
        <div class="mt-1/3 w-2/6 shrink-0 text-sm text-slate-500">
            <p>{{ period }}</p>
        </div>
        <div class="w-4/6 cursor-pointer text-white">
            <h2 class="text-md flex items-center gap-2 transition-colors duration-300 group-hover:text-teal-400">
                {{ title }}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-arrow-up-right transition-all duration-300 group-hover:inline-block group-hover:-translate-y-1 group-hover:translate-x-1">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                </svg>
            </h2>
            <p class="my-4 text-sm text-slate-500">
                {{ description }}
            </p>
            <p class="mt-2 flex flex-wrap gap-2 text-sm text-slate-300">
                <span v-for="tech in technologies" :key="tech" class="rounded-xl bg-gray-800 px-3 py-1 text-teal-400">
                    {{ tech }}
                </span>
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    period: string;
    title: string;
    description: string;
    technologies: string[];
}>();
</script>