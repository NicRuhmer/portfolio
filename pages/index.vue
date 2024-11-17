<template>
    <div>
        <!-- create a toogle button with dark and light here -->
        <main class="bg-bkg text-content flex h-screen w-full justify-center overflow-auto scroll-smooth lg:pt-32">
            <div class="block w-full px-4 lg:grid lg:max-w-6xl lg:grid-cols-2 lg:gap-8">
                <NavComponent class="mb-12 lg:mb-0 pt-12 lg:pt-0" />
                <div class="col-start-2 flex flex-col">
                    <section id="about">
                        <h1
                            class="text-accent2 text-md bg-bkg/80 sticky top-0 z-10 mb-5 py-4 font-bold uppercase backdrop-blur-sm lg:relative lg:hidden">
                            About</h1>
                        <AboutComponent class="mb-20" />
                    </section>
                    <section id="experience">
                        <h1
                            class="text-accent2 text-md bg-bkg/80 sticky top-0 z-10 mb-5 py-4 font-bold uppercase backdrop-blur-sm lg:relative lg:hidden">
                            Experiences</h1>
                        <div class="hover-group flex flex-col">
                            <CardComponent v-for="experience in experiences" :key="experience.id"
                                :period="experience.period" :title="experience.title"
                                :description="experience.description" :technologies="experience.technologies" />
                        </div>
                        <a @click="openResume"
                            class="text-accent2 hover:text-accent1 text-md group mb-20 mt-10 flex cursor-pointer items-center gap-2 font-semibold transition-colors duration-200"
                            href="https://drive.google.com/file/d/1tWDKZO5-1gPGR6h3fHCox2X-U59mSOq0/view?usp=drive_link"
                            target="_blank">
                            View Full Resume
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-arrow-up-right transition-all duration-200 group-hover:inline-block group-hover:-translate-y-1 group-hover:translate-x-1">
                                <path d="M7 7h10v10" />
                                <path d="M7 17 17 7" />
                            </svg>
                        </a>
                    </section>
                    <section id="projects">
                        <h1
                            class="text-accent2 text-md bg-bkg/80 sticky top-0 z-10 mb-5 py-4 font-bold uppercase backdrop-blur-sm lg:relative lg:hidden">
                            Projects</h1>
                        <div class="hover-group flex flex-col">
                            <ProjectsComponent v-for="project in projects.slice(0, 3)" :key="project.id"
                                :image="project.image" :alt_title="project.alt_title" :title="project.title"
                                :link="project.link" :description="project.description"
                                :technologies="project.technologies" />
                        </div>
                        <NuxtLink to="/projets" data-testid="archive-link"
                            class="text-accent2 hover:text-accent1 text-md group mb-20 mt-10 flex cursor-pointer items-center gap-2 font-semibold transition-colors duration-200">
                            View Full Projects Archive
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round"
                                class="lucide lucide-arrow-right transition-all duration-200 group-hover:inline-block group-hover:translate-x-1">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </NuxtLink>
                        <p class="text-content mb-20 text-sm">
                            Loosely designed and inspired by some many great portfolio and minimalistic design, coded in
                            Visual Studio Code by yours truly. Built with <NuxtLink
                                class="text-accent2 hover:text-accent1" to="https://nuxt.com/">Nuxt</NuxtLink>,
                            <NuxtLink class="text-accent2 hover:text-accent1" to="https://typescriptlang.org/">
                                Typescript</NuxtLink>,
                            <NuxtLink class="text-accent2 hover:text-accent1" to="https://tailwindcss.com/">Tailwind
                                CSS</NuxtLink>, deployed with Docker. All text is set in the <NuxtLink
                                class="text-accent2 hover:text-accent1" to="https://rsms.me/inter/">Inter</NuxtLink>
                            typeface.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { experiences } from '../data/experiences';
import { projects } from '../data/projects';

const router = useRouter();

function viewAllProjects() {
    try {
        router.push('/projets');
    } catch (error) {
        console.error('Navigation error:', error);
    }
}

const openResume = () => {
    window.open('https://drive.google.com/file/d/1tWDKZO5-1gPGR6h3fHCox2X-U59mSOq0/view?usp=drive_link', '_blank');
}

onMounted(() => {

    const light = document.querySelector('.light-cursor')

    document.addEventListener('mousemove', (e) => {
        light.style.left = e.pageX + 'px'
        light.style.top = e.pageY + 'px'
    })
});
</script>

<style></style>