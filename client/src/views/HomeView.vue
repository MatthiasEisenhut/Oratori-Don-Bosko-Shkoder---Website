<script setup>
import { ref, onMounted } from 'vue';
import { usePostStore } from '@/stores/posts.js';

const postStore = usePostStore();

const prevThreePosts = ref([]);

onMounted(async () => {
  await postStore.fetchPosts();
  prevThreePosts.value = postStore.posts.slice(0, 3);
  console.log(prevThreePosts.value);
});

const shortStr = (str) => {
  return str.length > 500 ? str.substring(0, 500) + '...' : str;
};

const strToDt = (str) => {
  return new Date(str).toLocaleDateString('sq-AL');
};
</script>

<template>
  <q-page padding class="column items-center">
    <q-img src="/images/placeholder.jpg" width="90vw" height="75vh"
      ><div class="absolute-full text-h1 flex flex-center">Home</div>
    </q-img>
    <div class="col" style="overflow: auto; min-width: 90vw; max-width: 90vw">
      <!-- TODO fix this section -->
      <div class="row q-my-md">
        <div class="col">
          <p>Lorem Ipsum</p>
        </div>
        <div class="col"><q-img src="/images/placeholder.jpg"></q-img></div>
      </div>
      <div class="row q-my-md">
        <div class="col">
          <q-img src="/images/placeholder.jpg"></q-img>
        </div>
        <div class="col"><p>Lorem Ipsum</p></div>
      </div>
      <div class="row q-my-md">
        <div class="col">
          <p>Lorem Ipsum</p>
        </div>
        <div class="col"><q-img src="/images/placeholder.jpg"></q-img></div>
      </div>
    </div>
    <div class="q-pa-md row items-start justify-center q-gutter-md">
      <q-card v-for="p in prevThreePosts" :key="p.post_id" class="my-card">
        <img :src="`${p.images[0].image_url}`" />

        <q-card-section>
          <div class="text-h6">{{ p.title }}</div>
          <div class="text-subtitle2">{{ strToDt(p.created_at) }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ shortStr(p.content) }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
