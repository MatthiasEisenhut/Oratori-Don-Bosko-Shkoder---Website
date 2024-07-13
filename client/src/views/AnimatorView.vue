<script setup>
import { ref, onMounted } from 'vue';
import { useAnimatorStore } from '@/stores/animators.js';

const animatorStore = useAnimatorStore();
const columns = [
  { name: 'image', label: 'Image', align: 'center', field: 'images' },
  { name: 'content', label: 'Content', align: 'left', field: 'content' },
  { name: 'actions', label: 'Actions', align: 'center', field: 'actions' },
];
const pagination = ref({
  sortBy: 'dateOfBirth',
  descending: true,
  page: 1,
  rowsPerPage: 5,
});

const animators = ref([]);
const openAnimator = ref(false);
const clickedAnimator = ref(null);
const loading = ref(true);

onMounted(async () => {
  await animatorStore.fetchAnimators();
  animators.value = animatorStore.animators;
  loading.value = false;
  console.log(animators.value);
});

const calcAge = (dob) => {
  const diff = Date.now() - new Date(dob).getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const strToDt = (str) => {
  return new Date(str).toLocaleDateString('sq-AL');
};

const openAnimatorDialog = (evt, row) => {
  openAnimator.value = true;
  clickedAnimator.value = row;
  console.log(row);
};
</script>

<template>
  <q-page padding class="row justify-center">
    <q-table
      :columns="columns"
      :rows="animators"
      hide-header
      v-model:pagination="pagination"
      table-style="width: 75vw"
      @row-click="openAnimatorDialog"
      :loading="loading"
    >
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
      <template #body-cell-image="props">
        <td>
          <q-img
            :src="`http://localhost:3000/images/animators/${props.row.image}`"
            width="10vw"
          ></q-img>
        </td>
      </template>
      <template #body-cell-content="props">
        <td>
          <p class="text-h4">Name: {{ props.row.name }}</p>
          <p class="text-h4">Age: {{ calcAge(props.row.dateofbirth) }}</p>
          <p class="text-h4">Birthday: {{ strToDt(props.row.dateofbirth) }}</p>
        </td>
      </template>
    </q-table>
    <q-dialog v-model="openAnimator" full-height
      ><q-card class="my-card">
        <q-card-section class="row items-center">
          <div class="text-h6"></div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <img :src="`http://localhost:3000/images/animators/${clickedAnimator.image}`" />

        <q-card-section>
          <div class="text-h6">{{ clickedAnimator.name }}</div>
          <div class="text-subtitle2">Age: {{ calcAge(clickedAnimator.dateofbirth) }}</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ clickedAnimator.aboutme }}
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
