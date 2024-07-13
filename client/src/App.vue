<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <q-layout class="font-montserrat" view="hHh lpr fff">
    <NavBar />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>
@font-face {
  font-family: montserrat;
  src: url(/fonts/montserrat/Montserrat-Regular.ttf);
}

.font-montserrat {
  font-family: 'montserrat';
}
</style>
