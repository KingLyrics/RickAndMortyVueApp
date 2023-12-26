<template>
  <div class="space-x-2 pl-24 flex">
    <input type="text" class="ring-blue-500 ring-2 p-1 w-[900px]" placeholder="Search for a character"
      v-model="nameOfCharacter">
    <button @click="fetchData" class="bg-blue-500 text-white py-2 px-3 hover:bg-blue-900">Search</button>
  </div>
</template>

<script setup>
const nameOfCharacter = '';
const emit = defineEmits(['datafetched'])


const fetchData = async () => {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${nameOfCharacter}`);
    const result = await response.json();
    emit('datafetched', result);
  } catch (error) {
    console.error(error);
  }
};
</script>
