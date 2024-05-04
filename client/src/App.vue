<script setup>
import NavBar from '@/components/NavBar.vue';
import FootBar from '@/components/FootBar.vue';
</script>

<template>
  <q-layout class="font-montserrat " view="hHh lpr fff">
    <NavBar />

    <q-page-container>
      <router-view />
    </q-page-container>

    <FootBar />
  </q-layout>
</template>

<style>
@font-face {
  font-family: montserrat;
  src: url(./assets/fonts/Montserrat/Montserrat-Regular.ttf);
}

.font-montserrat {
  font-family: 'montserrat';
}
</style>
