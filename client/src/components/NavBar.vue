<script setup></script>

<template>
  <q-header elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar class="q-my-sm">
      <q-avatar class="q-mx-md" size="xl">
        <img src="@/assets/logo.jpeg" />
      </q-avatar>

      <q-tabs>
        <q-route-tab to="/" label="Home" class="q-mx-md" />
        <!-- <q-route-tab to="/calendar" label="Calendar" class="q-mx-md" /> -->
        <q-route-tab to="/posts" label="Oratory News" class="q-mx-md" />
        <q-route-tab to="/football" label="Akademia Futbol" class="q-mx-md" />
        <q-route-tab to="/animators" label="Our Animators" class="q-mx-md" />
      </q-tabs>
      <q-space />
      <q-btn
        flat
        label="Social"
        class="q-mx-md"
        href="https://www.instagram.com/oratori_db_shkoder/"
        icon-right="fa-solid fa-arrow-right"
      />
      <q-btn flat label="Contact" class="q-mx-md" to="/contact" />
    </q-toolbar>
  </q-header>
</template>

<style scoped></style>
