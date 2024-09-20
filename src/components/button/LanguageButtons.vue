<template>
  <div class="row text-accent">
    <!-- English -->
    <q-btn
      :label="$t('locale.en')"
      :class="enStyle"
      @click="onLanguage(Locale.EN)"
      round unelevated
    />

    <div class="q-my-auto ">I</div>

    <!-- German -->
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

// Styles for the language buttons that are dependent on the current selected language
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

/**
 * If the user clicks on a language button, the language will be changed.
 * @param locale The language abbreviation to change to.
 */
function onLanguage(locale: Locale): void {
  i18n.locale.value = locale;
}
</script>
