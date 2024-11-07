<template>
    <div>
        <div class="absolute bottom-4 left-4">
            <span class=" sm:hidden">XS</span>
            <span class=" hidden sm:block md:hidden">SM</span>
            <span class=" hidden md:block lg:hidden">MD</span>
            <span class=" hidden lg:block xl:hidden">LG</span>
        </div>
        <!-- create a toogle button with dark and light here -->
        <main class="bg-bkg text-content flex h-screen w-full justify-center overflow-auto scroll-smooth pt-32">
            <div class="grid w-full max-w-6xl grid-cols-2 gap-8 px-4">
                <NavComponent />
                <div class="col-start-2 flex flex-col">
                    <section id="about">
                        <AboutComponent class="mb-20" />
                    </section>
                    <section id="experience">
                        <div class="hover-group flex flex-col">
                            <CardComponent v-for="experience in experiences" :key="experience.id"
                                :period="experience.period" :title="experience.title"
                                :description="experience.description" :technologies="experience.technologies" />
                        </div>
                        <h2
                            class="group mb-20 mt-10 flex cursor-pointer items-center gap-2 text-lg font-semibold transition-colors duration-200 hover:text-teal-400">
                            View Full Resume
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-arrow-up-right transition-all duration-200 group-hover:inline-block group-hover:-translate-y-1 group-hover:translate-x-1">
                                <path d="M7 7h10v10" />
                                <path d="M7 17 17 7" />
                            </svg>
                        </h2>
                    </section>
                    <section id="projects">
                        <div class="hover-group flex flex-col">
                            <ProjectsComponent v-for="project in projects.slice(0, 3)" :key="project.id"
                                :image="project.image" :alt_title="project.alt_title" :title="project.title"
                                :link="project.link" :description="project.description"
                                :technologies="project.technologies" />
                        </div>
                        <h2 @click="viewAllProjects"
                            class="group mb-20 mt-10 flex cursor-pointer items-center gap-2 text-lg font-semibold transition-colors duration-200 hover:text-teal-400">
                            View Full Projects Archive
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-arrow-right transition-all duration-200 group-hover:inline-block group-hover:translate-x-1">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </h2>
                        <p class="mb-20 text-sm text-slate-500">
                            Loosely designed and inspired by some many great portfolio and minimalistic design, coded in
                            Visual Studio Code by yours truly. Built with <NuxtLink
                                class="text-slate-50 hover:text-teal-500" to="https://nuxt.com/">Nuxt</NuxtLink>,
                            <NuxtLink class="text-slate-50 hover:text-teal-500" to="https://typescriptlang.org/">
                                Typescript</NuxtLink>,
                            <NuxtLink class="text-slate-50 hover:text-teal-500" to="https://tailwindcss.com/">Tailwind
                                CSS</NuxtLink>, deployed with Docker. All text is set in the <NuxtLink
                                class="text-slate-50 hover:text-teal-500" to="https://rsms.me/inter/">Inter</NuxtLink>
                            typeface.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { experiences } from '../data/experiences';
import { projects } from '../data/projects';

const theme = ref('dark');
const router = useRouter();

function toggleTheme() {
    if (process.client) {
        theme.value = theme.value === 'dark' ? 'cool' : 'dark';
        document.documentElement.setAttribute('data-theme', theme.value);
    }
}

function viewAllProjects() {
    router.push({ path: "/projets" });
}

onMounted(() => {
    if (process.client) {
        const initialTheme = document.documentElement.getAttribute('data-theme') || 'cool';
        theme.value = initialTheme;
        document.documentElement.setAttribute('data-theme', theme.value);
    }

    const light = document.querySelector('.light-cursor')

    document.addEventListener('mousemove', (e) => {
        light.style.left = e.pageX + 'px'
        light.style.top = e.pageY + 'px'
    })
});
</script>

<style></style>