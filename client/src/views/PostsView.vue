<script setup>
import { ref, onMounted } from 'vue';
import { usePostStore } from '@/stores/posts.js';

const postStore = usePostStore();
const columns = [
  { name: 'image', label: 'Image', align: 'center', field: 'images' },
  { name: 'content', label: 'Content', align: 'left', field: 'content' },
  { name: 'actions', label: 'Actions', align: 'center', field: 'actions' },
];
const pagination = ref({
  sortBy: 'date',
  descending: true,
  page: 1,
  rowsPerPage: 5,
});
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

const posts = ref([]);
const openPost = ref(false);
const slide = ref(0);

onMounted(async () => {
  await postStore.fetchPosts();
  posts.value = postStore.data;
  console.log(posts.value);
});

const shortStr = (str) => {
  return str.length > 500 ? str.substring(0, 500) + '...' : str;
};

const strToDt = (str) => {
  return new Date(str).toLocaleDateString('sq-AL');
};

const openPostDialog = () => {
  openPost.value = true;
};
</script>

<template>
  <q-page padding>
    <span>Posts</span>
    <q-table
      :columns="columns"
      :rows="posts"
      hide-header
      v-model:pagination="pagination"
      table-style="width: 75vw"
      @row-click="openPostDialog"
    >
      <template #body-cell-image="props">
        <td>
          <q-img :src="props.row.images[0]" width="25vw"></q-img>
        </td>
      </template>
      <template #body-cell-content="props">
        <td>
          <p class="text-h4">{{ props.row.title }}</p>
          <p class="test-subtitle-2">{{ strToDt(props.row.date) }}</p>
          <p class="text-body-1 text-wrap">{{ shortStr(props.row.content) }}</p>
        </td>
      </template>
    </q-table>
    <q-dialog v-model="openPost" full-height
      ><q-card class="my-card">
        <q-card-section class="row items-center">
          <div class="text-h6"></div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
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
