<template>
  <q-drawer v-model="showDrawer" side="left" class="bg-grey-2" overlay elevated>

    <q-scroll-area class="fit">
      <q-list padding class="menu-list">
        <q-item @click="onNavigationClick(RoutePaths.SEARCH_PAGE)" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            {{ $t('nav.stream') }}
          </q-item-section>
        </q-item>

        <q-item @click="onNavigationClick(RoutePaths.UPLOAD_PAGE)" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="file_upload" />
          </q-item-section>
          <q-item-section>
            {{ $t('nav.upload') }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { RoutePaths } from 'src/enums/RoutePaths';

// Init helpers
const router = useRouter();

// Init props
interface Props {
  showNavigationDrawer: boolean;
}

const props = defineProps<Props>();

// Init local variables
const showDrawer = ref(props.showNavigationDrawer);

watch(() => props.showNavigationDrawer, (newValue: boolean) =>
  showDrawer.value = newValue
);

function onNavigationClick(path: string): void {
  router.push(path);
}
</script>
