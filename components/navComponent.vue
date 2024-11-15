<template>
  <div class="flex flex-col justify-between lg:fixed lg:h-[calc(100vh-12rem)] lg:max-w-[calc((100vw-6rem)/2-1rem)]">
    <div class="flex flex-col gap-20">
      <div>
        <h2 class="text-accent2 mb-2 text-3xl lg:text-5xl font-bold">Heriniaina Ralison</h2>
        <p class="text-content text-lg lg:text-xl/relaxed">
          FullStack Developer
        </p>
        <p class=" text-content mt-4">
          I build high-performance, engaging and <br>accessible web
          applications.
        </p>
      </div>
      <div class="hidden lg:flex lg:flex-col lg:space-y-8">
        <ul class="flex flex-col space-y-8">
          <li class="group">
            <a href="#about" :class="[
              'group flex items-center transition-colors duration-300',
              activeSection === 'about' ? 'text-accent2' : 'text-content'
            ]">
              <span :class="[
                'flex items-center transition-transform duration-300',
                activeSection === 'about' ? 'translate-x-2' : 'group-hover:text-content group-hover:translate-x-2'
              ]">
                <span :class="[
                  'mr-5 inline-block h-px origin-left transition-all duration-300',
                  activeSection === 'about' ? 'bg-accent2 w-20' : 'bg-content group-hover:bg-accent2 w-12 group-hover:w-20'
                ]"></span>
                <span class="group-hover:text-accent2 text-sm font-semibold uppercase tracking-wider">about</span>
              </span>
            </a>
          </li>
          <li class="group">
            <a href="#experience" :class="[
              'group flex items-center transition-colors duration-300',
              activeSection === 'experience' ? 'text-accent2' : 'text-content'
            ]">
              <span :class="[
                'flex items-center transition-transform duration-300',
                activeSection === 'experience' ? 'translate-x-2' : 'group-hover:text-content group-hover:translate-x-2'
              ]">
                <span :class="[
                  'mr-5 inline-block h-px origin-left transition-all duration-300',
                  activeSection === 'experience' ? 'bg-accent2 w-20' : 'bg-content group-hover:bg-accent2 w-12 group-hover:w-20'
                ]"></span>
                <span class="group-hover:text-accent2 text-sm font-semibold uppercase tracking-wider">Experiences</span>
              </span>
            </a>
          </li>
          <li class="group">
            <a href="#projects" :class="[
              'group flex items-center transition-colors duration-300',
              activeSection === 'projects' ? 'text-accent2' : 'text-content'
            ]">
              <span :class="[
                'flex items-center transition-transform duration-300',
                activeSection === 'projects' ? 'translate-x-2' : 'group-hover:text-content group-hover:translate-x-2'
              ]">
                <span :class="[
                  'mr-5 inline-block h-px origin-left transition-all duration-300',
                  activeSection === 'projects' ? 'bg-accent2 w-20' : 'bg-content group-hover:bg-accent2 w-12 group-hover:w-20'
                ]"></span>
                <span class="group-hover:text-accent2 text-sm font-semibold uppercase tracking-wider">Projects</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="mb-12 mt-5 flex flex-row space-x-4">
      <a href="https://github.com/NicRuhmer" target="_blank"
        class="text-content hover:text-accent2 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z">
          </path>
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/ralison-heriniaina-rogenico-ruhmer/" target="_blank"
        class="text-content hover:text-accent2 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current">
          <path
            d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z">
          </path>
        </svg>
      </a>
      <a href="mailto:nicrohmer0@gmail.com" class="text-content hover:text-accent2 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current">
          <path
            d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z">
          </path>
        </svg>
      </a>
      <a href="https://www.instagram.com/ruhmernic/"
        class="text-content hover:text-accent2 transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current">
          <path
            d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z">
          </path>
          <circle cx="16.806" cy="7.207" r="1.078"></circle>
          <path
            d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z">
          </path>
        </svg>
      </a>
      <button @click="toggleTheme" class="text-content hover:text-accent2 transition-colors duration-300">
        <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"
          class="fill-current">
          <path
            d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z">
          </path>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="fill-current">
          <path
            d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z">
          </path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useTheme } from '~/utils/useTheme';

const activeSection = ref('about')
const observers: IntersectionObserver[] = []
const { theme, toggleTheme } = useTheme()

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