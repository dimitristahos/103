<script setup>
  const { $pb } = useNuxtApp();
  const resultList = ref([]);

  onMounted(async () => {
    resultList.value = await $pb.collection("posts").getList(1, 50);
  });
</script>

<template>
  <div>
    <ul>
      <li v-for="result in resultList.items" :key="result.id">
        {{ result.Title }}
      </li>
    </ul>
  </div>
</template>
