<script setup>
import { ref, onMounted } from 'vue';
import { usePostStore } from '@/stores/posts.js';

const postStore = usePostStore();

const prevThreePosts = ref([]);
const openingHours = ref('Monday - Saturday, 17:00 - 21:00');
const formationGroupTimes = ref('Saturday, 17:00 - 18:00');
const catechismTimes = ref('Friday, 17:00 - 18:00');

onMounted(async () => {
  await postStore.fetchPosts();
  prevThreePosts.value = postStore.posts.slice(0, 3);
});

const shortStr = (str) => {
  return str.length > 500 ? str.substring(0, 500) + '...' : str;
};

const strToDt = (str) => {
  return new Date(str).toLocaleDateString('sq-AL');
};
</script>

<template>
  <!-- Desktop Version -->
  <q-page padding class="gt-xs column items-center">
    <q-img src="/images/placeholder.jpg" width="90vw" height="75vh"
      ><div class="absolute-full text-h1 flex flex-center">Home</div>
    </q-img>
    <div class="col" style="overflow: auto; min-width: 90vw; max-width: 90vw">
      <div class="row q-my-md">
        <div class="col column flex-center">
          <p class="text-h3 text-weight-bold">Opening Hours:</p>
          <p class="text-h3">{{ openingHours }}</p>
        </div>
        <div class="col"><q-img src="/images/placeholder.jpg"></q-img></div>
      </div>
      <div class="row q-my-md">
        <div class="col">
          <q-img src="/images/placeholder.jpg"></q-img>
        </div>
        <div class="col column flex-center">
          <p class="text-h3 text-weight-bold">Formation Groups:</p>
          <p class="text-h3">{{ formationGroupTimes }}</p>
        </div>
      </div>
      <div class="row q-my-md">
        <div class="col column flex-center">
          <p class="text-h3 text-weight-bold">Catechism:</p>
          <p class="text-h3">{{ catechismTimes }}</p>
        </div>
        <div class="col"><q-img src="/images/placeholder.jpg"></q-img></div>
      </div>
    </div>
    <p class="text-h3 text-weight-bold q-mt-md">Latest News:</p>
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
    <div class="row justify-end">
      <q-btn to="/posts">More</q-btn>
    </div>
  </q-page>

  <!-- Mobile Version -->
  <q-page padding class="xs column items-center">
    <q-img src="/images/placeholder.jpg" width="90vw" height="50vh"
      ><div class="absolute-full text-h3 flex flex-center text-center">Home</div>
    </q-img>
    <div class="" style="overflow: auto; min-width: 90vw; max-width: 90vw">
      <div class="q-my-md">
        <div class="col column flex-center">
          <p class="text-h4 text-weight-bold">Opening Hours:</p>
          <p class="text-h4 text-center">{{ openingHours }}</p>
        </div>
        <div class=""><q-img src="/images/placeholder.jpg"></q-img></div>
      </div>
      <div class="q-my-md">
        <div class="column flex-center">
          <p class="text-h4 text-weight-bold">Formation Groups:</p>
          <p class="text-h4 text-center">{{ formationGroupTimes }}</p>
        </div>
        <div class="">
          <q-img src="/images/placeholder.jpg"></q-img>
        </div>
      </div>
      <div class="q-my-md">
        <div class="column flex-center">
          <p class="text-h4 text-weight-bold">Catechism:</p>
          <p class="text-h4 text-center">{{ catechismTimes }}</p>
        </div>
        <div class=""><q-img src="/images/placeholder.jpg"></q-img></div>
      </div>
    </div>
    <p class="text-h4 text-weight-bold q-mt-md">Latest News:</p>
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
    <div class="row justify-end">
      <q-btn to="/posts">More</q-btn>
    </div>
  </q-page>
</template>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
