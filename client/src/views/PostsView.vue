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
  </q-page>
</template>

<style scoped>
.my-card {
  width: 75vw;
}
</style>
