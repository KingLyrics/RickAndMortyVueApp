<template>
  <div class="mt-20">
    <div v-if="loading">
      <p class="text-4xl font-bold">Loading...</p>
    </div>
    <div v-else>
      <div v-if="characters" class="grid  grid-cols-3 ml-24">
        <div v-for="(character, index) in characters.results" :key="index" class="w-52 p-6 relative">
          <img :src="character.image" class="rounded-md w-72 " :alt="character.name">
          <h3 class="text-xl font-bold mb-3">{{ character.name }}</h3>
          <p class="absolute bg-green-500 p-1 top-7 right-7" :class="getStatus(character.status)"> {{ character.status }}
          </p>
          <p class="font-bold">Last location <br /> <span class="font-normal text-xl">
              {{ character.location.name }}
            </span></p>
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

const getStatus = (status) => {
  if (status == 'Dead') {
    return 'bg-red-500'
  } else if (status == 'Alive') {
    return 'bg-green-500 text-white'
  } else {
    return 'bg-gray-500 text-white'
  }
}




</script>