<script setup>
  const { $pb } = useNuxtApp();
  const resultList = ref([]);

  const items = computed(() => {
    return resultList.value.items?.map((item) => {
      return {
        label: item.Title,
        images: item.expand?.Gallery?.map((image) => {
          return $pb.files.getUrl(image, image.field, { thumb: "100x250" });
        }),
        ...item,
      };
    });
  });

  onMounted(async () => {
    resultList.value = await $pb.collection("posts").getList(1, 50, { expand: "Gallery" });
  });
</script>

<template>
  <UContainer class="mt-8">
    <UAccordion color="primary" variant="soft" size="sm" :items="items">
      <template #item="{ item: { images, Description } }">
        <div v-html="Description"></div>
        <UCarousel v-slot="{ item }" :items="images">
          <img :src="item" width="300" height="400" draggable="false" />
        </UCarousel>
      </template>
    </UAccordion>
  </UContainer>
</template>
