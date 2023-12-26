<template>
  <main class="bg-gray-50 min-h-screen p-6">
    <div class="max-w-3xl mx-auto">
      <div class="mt-10">
        <h1 class="text-5xl text-center font-light">Characters</h1>
      </div>
      <div class="mt-10">
        <InputBar @datafetched="handleDataFetched" />
      </div>
      <CharacterList :characters="characters" :loading="loading" />
    </div>

  </main>
</template>

<script setup>
import InputBar from '@/components/InputBar.vue';
import CharacterList from '@/components/CharacterList.vue';
import { onMounted, ref } from 'vue';

const characters = ref([]);
const loading = ref(false);

const initLoading = async () => {
  try {
    loading.value = true;
    const res = await fetch("https://rickandmortyapi.com/api/character");
    characters.value = await res.json();
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  initLoading();
});

const handleDataFetched = (result) => {
  characters.value = result;
  console.log(characters.value.results);
};
</script>