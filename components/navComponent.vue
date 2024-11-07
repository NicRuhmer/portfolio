<template>
  <div class="fixed flex max-w-[calc((100vw-6rem)/2-1rem)] flex-col gap-20">
    <div>
      <h2 class="mb-2 text-5xl font-bold text-slate-50">Heriniaina Ralison</h2>
      <p class="text-xl/relaxed text-slate-200">
        FullStack Developer
      </p>
      <p class=" mt-4 text-slate-500">
        I build high-performance, engaging and <br>accessible web
        applications.
      </p>
    </div>
    <div class="flex flex-col space-y-8">
      <ul class="flex flex-col space-y-8">
        <!-- <li class="group">
          <a href="#about" :class="[
            'group flex items-center transition-colors duration-300',
            activeSection === 'about' ? 'text-white' : 'text-slate-500'
          ]">
            <span :class="[
              'flex items-center transition-transform duration-300',
              activeSection === 'about' ? 'translate-x-2' : 'group-hover:translate-x-2 group-hover:text-slate-500'
            ]">
              <span :class="[
                'mr-5 inline-block h-px origin-left transition-all duration-300',
                activeSection === 'about' ? 'w-20 bg-white' : 'w-12 bg-slate-500 group-hover:w-20 group-hover:bg-slate-500'
              ]"></span>
              <span class="text-sm uppercase tracking-wider">About</span>
            </span>
          </a>
        </li> -->
        <li class="group">
          <a href="#about" :class="[
            'group flex items-center transition-colors duration-300',
            activeSection === 'about' ? 'text-white' : 'text-slate-500'
          ]">
            <span :class="[
              'flex items-center transition-transform duration-300',
              activeSection === 'about' ? 'translate-x-2' : 'group-hover:translate-x-2 group-hover:text-slate-500'
            ]">
              <span :class="[
                'mr-5 inline-block h-px origin-left transition-all duration-300',
                activeSection === 'about' ? 'w-20 bg-white' : 'w-12 bg-slate-500 group-hover:w-20 group-hover:bg-slate-500'
              ]"></span>
              <span class="text-sm uppercase tracking-wider">About</span>
            </span>
          </a>
        </li>
        <li class="group">
          <a href="#experience" :class="[
            'group flex items-center transition-colors duration-300',
            activeSection === 'experience' ? 'text-white' : 'text-slate-500'
          ]">
            <span :class="[
              'flex items-center transition-transform duration-300',
              activeSection === 'experience' ? 'translate-x-2' : 'group-hover:translate-x-2 group-hover:text-slate-500'
            ]">
              <span :class="[
                'mr-5 inline-block h-px origin-left transition-all duration-300',
                activeSection === 'experience' ? 'w-20 bg-white' : 'w-12 bg-slate-500 group-hover:w-20 group-hover:bg-slate-500'
              ]"></span>
              <span class="text-sm uppercase tracking-wider">Experience</span>
            </span>
          </a>
        </li>
        <li class="group">
          <a href="#projects" :class="[
            'group flex items-center transition-colors duration-300',
            activeSection === 'projects' ? 'text-white' : 'text-slate-500'
          ]">
            <span :class="[
              'flex items-center transition-transform duration-300',
              activeSection === 'projects' ? 'translate-x-2' : 'group-hover:translate-x-2 group-hover:text-slate-500'
            ]">
              <span :class="[
                'mr-5 inline-block h-px origin-left transition-all duration-300',
                activeSection === 'projects' ? 'w-20 bg-white' : 'w-12 bg-slate-500 group-hover:w-20 group-hover:bg-slate-500'
              ]"></span>
              <span class="text-sm uppercase tracking-wider">Projects</span>
            </span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';

const activeSection = ref('')
const observers: IntersectionObserver[] = []

onMounted(() => {
  const sections = ['about', 'experience', 'projects']

  sections.forEach(section => {
    const element = document.getElementById(section)
    if (element) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              activeSection.value = section
            }
          })
        },
        {
          rootMargin: '-50% 0px -50% 0px',
          threshold: 0
        }
      )

      observer.observe(element)
      observers.push(observer)
    }
  })
})

onUnmounted(() => {
  observers.forEach(observer => observer.disconnect())
})
</script>

<style></style>