<template>
  <q-layout view="hHh lpr fFf">

    <q-header reveal elevated class="bg-secondary text-primary">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="showNavigationDrawer = !showNavigationDrawer" />

        <q-toolbar-title class="row" style="max-height: 100px">
          <div class="col q-my-auto q-pl-lg text-h3">
            {{ $t('app.title') }}
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7f/DHBW_CAS_Logo.png" style="max-height: 100px">
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <navigation-drawer v-model:show-navigation-drawer="showNavigationDrawer" />

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavigationDrawer from 'components/drawers/NavigationDrawer.vue';

const showNavigationDrawer = ref(false);
</script>
