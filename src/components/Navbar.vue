<script setup>
import { RouterLink } from 'vue-router';
</script>


<template>
  <nav class="px-24 flex items-center justify-between p-6">
    <div>
      <RouterLink to="/" class="text-3xl font-bold">Rick & Morty <span class="text-blue-500">Wiki</span></RouterLink>
    </div>
    <div class="space-x-10">
      <RouterLink to="/" class="text-xl" active-class="active">Characters</RouterLink>
      <RouterLink to="/episode" class="text-xl" active-class="active">Episode</RouterLink>
      <RouterLink to="/location" class="text-xl" active-class="active">Location</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.active {
  @apply text-blue-500 font-bold border-b-4 border-b-blue-500 pb-4
}
</style>