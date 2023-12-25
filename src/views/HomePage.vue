<template>
  <main class="bg-gray-50 h-screen p-6">
    <div class="max-w-3xl mx-auto">
      <div class="mt-10 ">
        <h1 class="text-5xl text-center font-light">Characters</h1>
      </div>
      <div class="mt-10 ">
        <InputBar @datafetched="handleDataFetched" />
      </div>
      <div>
        results
        <pre>{{ data }}</pre>
      </div>
    </div>
  </main>
</template>



<script setup>
import InputBar from '@/components/InputBar.vue';

import { ref } from 'vue';

const data = ref(null);

const handleDataFetched = (result) => {
  data.value = result
};

</script>
