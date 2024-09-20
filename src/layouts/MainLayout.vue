<template>
  <q-layout view="hHh lpr fFf">
    <div id="background">
      <div id="blur">

        <!-- Header -->
        <q-header elevated class="bg-secondary text-primary">
          <q-toolbar>
            <!-- Navigation Drawer -->
            <q-btn dense flat round icon="menu" @click="showNavigationDrawer = !showNavigationDrawer" />

            <!-- Title -->
            <q-toolbar-title class="row">
              <div class="col text-bold q-my-auto q-pl-lg text-h3">
                <div class="row">
                  {{ $t('app.title-1') }}
                  <div class="text-accent">
                    {{ $t('app.title-2') }}
                  </div>
                </div>
              </div>

              <!-- Language Buttons & Logo -->
              <div class="row justify-evenly items-centers">
                <language-buttons />
                <div class="col">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7f/DHBW_CAS_Logo.png"
                    :alt="$t('app.institution')"
                    class="toolbar-logo"
                  >
                </div>
              </div>
            </q-toolbar-title>
          </q-toolbar>
        </q-header>

        <!-- Navigation Drawer -->
        <navigation-drawer class="text-h6" v-model:show-navigation-drawer="showNavigationDrawer" />

        <!-- Page Content -->
        <q-page-container>
          <router-view />
        </q-page-container>
      </div>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavigationDrawer from 'components/drawers/NavigationDrawer.vue';
import LanguageButtons from 'components/button/LanguageButtons.vue';

const showNavigationDrawer = ref(false);
</script>
