<template>
  <div>
    <!-- <div class="absolute bottom-4 left-4">
      <span class=" sm:hidden">XS</span>
      <span class=" hidden sm:block md:hidden">SM</span>
      <span class=" hidden md:block lg:hidden">MD</span>
      <span class=" hidden lg:block xl:hidden">LG</span>
    </div> -->
    <NuxtRouteAnnouncer />
    <div class="light-cursor"></div>
    <div data-lenis-prevent></div>
    <NuxtLayout class="bg-bkg">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useRouter } from 'nuxt/app'
import { onMounted } from 'vue'

onMounted(() => {
  const router = useRouter()
  const redirect = sessionStorage.getItem('redirect')

  if (redirect) {
    sessionStorage.removeItem('redirect')
    // Assurez-vous que le chemin commence par '/'
    const path = redirect.startsWith('/') ? redirect : '/' + redirect
    router.push(path)
  }
})
</script>

<style>
/* body { */
/* background-color: hsl(224deg 46% 12%); */
/* } */
</style>