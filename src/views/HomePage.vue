<template>
  <main class="bg-gray-50 min-h-screen p-6 relative">
    <div class="max-w-3xl mx-auto">
      <div class="mt-10">
        <h1 class="text-5xl text-center font-light">Characters</h1>
      </div>
      <div class="mt-10">
        <InputBar @datafetched="handleDataFetched" />
      </div>
      <CharacterList :characters="characters" :loading="loading" />
      <div class="flex items-center justify-center space-x-6 my-10 absolute top-96 left-24 ">
        <button @click="initLoading(currentPage--)"
          class="bg-blue-500 text-white py2 px-3 rounded-md text-2xl">Prev</button>
        <button @click="initLoading(currentPage++)"
          class="bg-blue-500 text-white py2 px-3 rounded-md text-2xl">Next</button>
      </div>


    </div>

  </main>
</template>

<script setup>
import InputBar from '@/components/InputBar.vue';
import CharacterList from '@/components/CharacterList.vue';
import { onMounted, ref } from 'vue';
const characters = ref(null);
const loading = ref(false);
const currentPage = ref(1);



const initLoading = async (pageNumber) => {
  try {
    loading.value = true;
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`);
    characters.value = await res.json();
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  initLoading(1);
});

const handleDataFetched = (result) => {
  characters.value = result;
  console.log(characters.value.results);
};
</script>