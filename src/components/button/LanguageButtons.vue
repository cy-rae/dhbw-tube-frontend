<template>
  <div class="row text-accent">
      <q-btn
        :label="$t('locale.en')"
        :class="enStyle"
        @click="onLanguage(Locale.EN)"
        round unelevated
      />
    <div class="q-my-auto ">I</div>
    <q-btn
      :label="$t('locale.de')"
      :class="deStyle"
      @click="onLanguage(Locale.DE)"
      round unelevated
    />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Locale } from 'src/enums/Locale';
import { computed, ComputedRef } from 'vue';

const i18n = useI18n();

const enStyle: ComputedRef<string> = computed(() => {
  if (i18n.locale.value !== Locale.DE.toString())
    return 'q-my-auto text-bold text-primary';
  else
    return 'q-my-auto';
});
const deStyle: ComputedRef<string> = computed(() => {
  if (i18n.locale.value === Locale.DE.toString())
    return 'q-my-auto text-bold text-primary';
  else
    return 'q-my-auto';
});

function onLanguage(locale: Locale): void {
  i18n.locale.value = locale;
}
</script>
