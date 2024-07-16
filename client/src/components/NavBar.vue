<script setup>
import { ref } from 'vue';

const openMobileNavMenu = ref(false);
</script>

<template>
  <q-header elevated class="bg-primary text-white" height-hint="98">
    <!-- Desktop Version -->
    <q-toolbar class="q-my-sm gt-sm">
      <q-avatar class="q-mx-md" size="xl">
        <img src="/images/logo.jpeg" />
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
        icon-right="fa-solid fa-arrow-up-right-from-square"
      />
      <q-btn flat label="Contact" class="q-mx-md" to="/contact" />
    </q-toolbar>

    <!-- Mobile Version -->
    <q-toolbar class="q-my-sm lt-md">
      <q-avatar class="q-mx-md" size="xl">
        <img src="/images/logo.jpeg" />
      </q-avatar>
      <q-space />
      <q-btn flat class="q-mx-sm" icon="fa-solid fa-bars" @click="openMobileNavMenu = true" />

      <q-dialog
        no-esc-dismiss
        no-backdrop-dismiss
        full-width
        full-height
        position="top"
        v-model="openMobileNavMenu"
      >
        <q-card flat class="bg-primary text-white font-montserrat q-pa-md">
          <q-card-actions align="right">
            <q-btn icon="fa-solid fa-xmark" @click="openMobileNavMenu = false" flat></q-btn>
          </q-card-actions>
          <q-card-section>
            <q-tabs vertical indicator-color="transparent" active-color="white">
              <q-route-tab to="/" label="Home" class="q-mx-md" />
              <!-- <q-route-tab to="/calendar" label="Calendar" class="q-mx-md" /> -->
              <q-route-tab to="/posts" label="Oratory News" class="q-mx-md" />
              <q-route-tab to="/football" label="Akademia Futbol" class="q-mx-md" />
              <q-route-tab to="/animators" label="Our Animators" class="q-mx-md" />
            </q-tabs>
          </q-card-section>

          <q-separator color="white" />

          <q-card-section>
            <div class="row justify-center">
              <q-btn
                flat
                label="Social"
                class="q-mx-md"
                href="https://www.instagram.com/oratori_db_shkoder/"
                icon-right="fa-solid fa-arrow-up-right-from-square"
              />
              <q-btn flat label="Contact" class="q-mx-md" to="/contact" />
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-toolbar>
  </q-header>
</template>

<style scoped></style>
