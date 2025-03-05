<template>
    <div
        class="hover:bg-accent1/5 group mt-3 flex w-full justify-between rounded-lg bg-transparent px-0 lg:px-5 py-6 backdrop-blur-lg transition-all duration-300 hover:!opacity-100 hover:shadow-lg hover:!blur-none [.hover-group:hover_&:not(:hover)]:opacity-50 [.hover-group:hover_&:not(:hover)]:blur-[.5px]">
        <div class="mt-1/3 text-content w-1/4 shrink-0 text-sm lg:w-2/6">
            <p>{{ period }}</p>
        </div>
        <div class="text-accent2 w-4/6 cursor-pointer">
            <h2 class="group-hover:text-accent1 text-md flex items-center gap-2 transition-colors duration-300">
                {{ title }}
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-arrow-up-right transition-all duration-300 group-hover:inline-block group-hover:-translate-y-1 group-hover:translate-x-1">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                </svg> -->
            </h2>
            <p class="text-content my-4 text-sm">
                {{ description }}
            </p>
            <p class="text-content mt-2 flex flex-wrap gap-2 text-sm">
                <span v-for="tech in technologies" :key="tech" data-testid="technology"
                    class="bg-accent1/10 text-accent1 rounded-xl px-3 py-1 text-sm transition-colors duration-300">
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