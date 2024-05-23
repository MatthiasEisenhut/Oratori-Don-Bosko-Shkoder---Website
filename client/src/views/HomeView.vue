<script setup>
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
</script>

<template>
  <q-page padding class="row justify-center">
    <q-img src="/images/placeholder.jpg" width="90vw" height="75vh"
      ><div class="absolute-full text-h1 flex flex-center">Home</div>
    </q-img>
    <div class="row">
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
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
      <q-card class="my-card">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" />

        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
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
