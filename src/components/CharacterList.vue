<template>
  <div class="mt-20">
    <div v-if="loading">
      <p class="text-4xl font-bold">Loading...</p>
    </div>
    <div v-else>
      <div v-if="characters" class="grid  grid-cols-3 ml-24">
        <div v-for="(character, index) in characters.results" :key="index" class="w-52 p-6">
          <img :src="character.image" class="rounded-md w-72 " :alt="character.name">
          <h3 class="text-xl font-bold mb-3">{{ character.name }}</h3>
          <p>Status: {{ character.status }}</p>
          <p>Species: {{ character.species }}</p>
        </div>
      </div>
      <div v-else>
        <p class="text-4xl font-bold">No characters found.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['characters', 'loading']);





</script>