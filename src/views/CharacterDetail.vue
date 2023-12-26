<template>
  <div>
    <RouterLink to="/" class="bg-blue-600 text-white py-2 px-3 ml-32 flex items-center w-60"> <span> <svg
          xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
        </svg>
      </span> Back to Character Search</RouterLink>
    <div v-if="loading">
      <p class="text-2xl font-bold text-center">Loading</p>
    </div>
    <div v-else class="max-w-xl mx-auto mt-5 flex items-center justify-around space-x-6">
      <img :src="character.image" :alt="character.name">
      <div class="items-start  space-y-3 text-center">
        <h1 class="text-xl font-light">Name: {{ character.name }}</h1>
        <h1 class="text-xl font-light ">Status: <span :class="statusStyling(character.status)" class="p-2">
            {{ character.status }}
          </span> </h1>
        <h1 class="text-xl font-light"> Origin:{{ character.origin.name }}</h1>
        <h1 class="text-xl font-light">Gender: {{ character.gender }}</h1>
      </div>
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

const statusStyling = (status) => {
  if (status == 'Dead') {
    return 'bg-red-500 text-white'
  } else if (status == 'Alive') {
    return 'bg-green-500 text-white'
  } else {
    return 'bg-gray-500 text-white'
  }
}

onBeforeMount(() => {
  individualCharacter();
});


</script>