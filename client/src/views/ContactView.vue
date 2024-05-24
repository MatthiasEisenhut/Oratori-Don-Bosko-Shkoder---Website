<script setup>
import { ref, onMounted } from 'vue';
import { useContactStore } from '@/stores/contacts.js';

const contactStore = useContactStore();
const columns = [
  { name: 'image', label: 'Image', align: 'center', field: 'images' },
  { name: 'content', label: 'Content', align: 'left', field: 'content' },
  { name: 'actions', label: 'Actions', align: 'center', field: 'actions' },
];
const pagination = ref({
  sortBy: 'name',
  descending: true,
  page: 1,
  rowsPerPage: 5,
});

const contacts = ref([]);
const loading = ref(true);

onMounted(async () => {
  await contactStore.fetchContacts();
  contacts.value = contactStore.contacts;
  loading.value = false;
  console.log(contacts.value);
});
</script>

<template>
  <q-page padding class="row justify-center">
    <q-table
      :columns="columns"
      :rows="contacts"
      hide-header
      v-model:pagination="pagination"
      :loading="loading"
    >
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
      <template #body-cell-image="props">
        <td>
          <q-img
            :src="`http://localhost:3000/images/contacts/${props.row.image}`"
            width="10vw"
          ></q-img>
        </td>
      </template>
      <template #body-cell-content="props">
        <td>
          <p class="text-h4">Name: {{ props.row.name }}</p>
          <p class="text-h4" v-if="props.row.email">Email: {{ props.row.email }}</p>
          <p class="text-h4" v-if="props.row.phone">Phone: {{ props.row.phone }}</p>
        </td>
      </template>
    </q-table>
  </q-page>
</template>
