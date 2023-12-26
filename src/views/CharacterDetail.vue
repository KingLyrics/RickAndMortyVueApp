<template>
  <div>
    <RouterLink to="/" class="bg-blue-600 text-white py-2 px-3 ml-32 flex items-center w-60"> <span> <svg
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
      </span> Back to Character Search</RouterLink>
    <div v-if="loading">
      <p class="text-2xl font-bold">Loading</p>
    </div>
    <div v-else class="max-w-md mx-auto">
      <img :src="character.image" :alt="character.name">
    </div>

  </div>
</template>


<script setup>
import { useRoute } from 'vue-router';
import { ref, onBeforeMount } from 'vue';
import { RouterLink } from 'vue-router';

const character = ref(null);
const loading = ref(false)
const route = useRoute();
const { id } = route.params

const individualCharacter = async () => {
  try {
    loading.value = true
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}
`)
    const data = await response.json();
    character.value = data;

  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false;
  }
};

onBeforeMount(() => {
  individualCharacter();
});


</script>