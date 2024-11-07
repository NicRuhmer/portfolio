<template>
  <div>
    <NuxtRouteAnnouncer />
    <div class="light-cursor"></div>
    <div data-lenis-prevent></div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
const lenis = useNuxtApp().$lenis;

onMounted(() => {
  if (lenis) {
    lenis.destroy();
  }
});

onUnmounted(() => {
  if (lenis) {
    lenis.destroy();
  }
});
</script>
<style>
body {
  background-color: hsl(224deg 46% 12%);
}
</style>