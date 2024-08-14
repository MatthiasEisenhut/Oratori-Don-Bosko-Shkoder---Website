<script setup>
import { ref, onMounted } from 'vue';
import { usePostStore } from '@/stores/posts.js';

const postStore = usePostStore();
const columns = [
  { name: 'image', label: 'Image', align: 'center', field: 'images' },
  { name: 'content', label: 'Content', align: 'left', field: 'content' },
];
const pagination = ref({
  sortBy: 'created_at',
  descending: true,
  page: 1,
  rowsPerPage: 5,
});

const posts = ref([]);
const openPost = ref(false);
const slide = ref(0);
const clickedPost = ref(null);
const loading = ref(true);

onMounted(async () => {
  await postStore.fetchPosts();
  posts.value = postStore.posts;
  loading.value = false;
  console.log(posts.value);
});

const shortStr = (str) => {
  return str.length > 500 ? str.substring(0, 500) + '...' : str;
};

const strToDt = (str) => {
  return new Date(str).toLocaleDateString('sq-AL');
};

const openPostDialog = (evt, row) => {
  openPost.value = true;
  clickedPost.value = row;
  slide.value = 0;
  console.log(row);
};
</script>

<template>
  <!-- TODO add mobile layout -->
  <q-page padding class="row justify-center">
    <q-img src="/images/placeholder.jpg" width="90vw" height="75vh" class="q-mb-lg"
      ><div class="absolute-full text-h1 flex flex-center">News</div>
    </q-img>
    <q-table
      :columns="columns"
      :rows="posts"
      hide-header
      v-model:pagination="pagination"
      table-style="width: 75vw"
      @row-click="openPostDialog"
      :loading="loading"
    >
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
      <template #body-cell-image="props">
        <td>
          <q-img :src="`${props.row.images[0].image_url}`" width="25vw"> </q-img>
        </td>
      </template>
      <template #body-cell-content="props">
        <td>
          <p class="text-h4">{{ props.row.title }}</p>
          <p class="test-subtitle-2">{{ strToDt(props.row.created_at) }}</p>
          <p class="text-body-1" style="word-break: normal; white-space: normal">
            {{ shortStr(props.row.content) }}
          </p>
        </td>
      </template>
    </q-table>
    <q-dialog v-model="openPost" full-height
      ><q-card class="my-card font-montserrat">
        <q-card-section class="row items-center">
          <div class="text-h6"></div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-carousel v-model="slide" autoplay animated>
          <q-carousel-slide
            v-for="(i, k) in clickedPost.images"
            :key="i.image_id"
            :img-src="`${i.image_url}`"
            :name="k"
          >
          </q-carousel-slide>
        </q-carousel>

        <q-card-section>
          <div class="text-h6">{{ clickedPost.title }}</div>
          <div class="text-subtitle2">{{ strToDt(clickedPost.created_at) }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ clickedPost.content }}
        </q-card-section>
      </q-card></q-dialog
    >
  </q-page>
</template>

<style scoped>
.my-card {
  width: 75vw;
}
</style>
