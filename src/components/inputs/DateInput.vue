<template>
  <q-input
    ref="dateInputRef"
    v-model="inputDate"
    :mask="dateService.DATE_MASK()"
    :label="label"
    :rules="props.rules"
    @update:model-value="onUpdateInputDate"
    standout fill-mask="#" color="accent"
  >
    <template v-slot:append>
      <q-btn @click="showCalendar = true" icon="event" color="transparent" text-color="primary" round dense unelevated/>
      <q-dialog v-model="showCalendar">
        <q-date
          v-model="calendarDate"
          :mask="dateService.DATE_SHORT_FORMAT()"
          :locale="localeDateOptions"
          @update:model-value="onUpdateCalendarDate"
          today-btn color="accent"
        />
      </q-dialog>
    </template>
  </q-input>
</template>

<script setup lang="ts">
import {inject, ref, watch} from 'vue';
import {dateServiceInjectionKey, ruleServiceInjectionKey} from 'src/injection-keys';
import {IDateService} from 'src/services/date-service/IDateService';
import {IRuleService} from 'src/services/rule-service/IRuleService';
import {LocaleDateOption} from 'src/models/LocaleDateOption';

// Initialize helpers
const dateService: IDateService = inject(dateServiceInjectionKey) as IDateService;
const ruleService: IRuleService = inject(ruleServiceInjectionKey) as IRuleService;

// Initialize properties
interface Props {
  date: string,
  label: string
  rules: (() => string | true)[]
}

const props = defineProps<Props>();

// Initialize template variables
const dateInputRef = ref();
const inputDate = ref(props.date);
const localeDateOptions = new LocaleDateOption();
const calendarDate = ref(props.date);
const showCalendar = ref(false);

// region UPDATE METHODS
/**
 * Watch input date and check if the date is valid. If not, the calendar date will be set to an empty string.
 */
function onUpdateInputDate() {
  // If user did not write a valid date, the calendar date will be reset. Else, the calendar date will be updated and
  // the new value will be emitted to the parent component.
  if (!inputDate.value || inputDate.value.length !== dateService.DATE_MASK().length
    || typeof ruleService.isDateStringValid(inputDate.value) === 'string' || inputDate.value.includes('#')) {
    calendarDate.value = '';
  } else {
    calendarDate.value = inputDate.value;
    emit('update:date', inputDate.value);
  }
}

function onUpdateCalendarDate() {
  // If user did not select a valid date, the input date will be reset. Else, the input date will be updated and
  // the new value will be emitted to the parent component.
  if (!calendarDate.value || calendarDate.value.length !== dateService.DATE_MASK().length
    || typeof ruleService.isDateStringValid(calendarDate.value) === 'string' || calendarDate.value.includes('#')) {
    inputDate.value = '';
  } else {
    inputDate.value = calendarDate.value;
    emit('update:date', calendarDate.value);
  }
}

/**
 * If the date variable changes in the parent component, the local variable will be updated.
 */
watch(() => props.date, (newValue: string) => {
  // The date variable of the q-date component will be updated due to the watch method of the input date variable.
  inputDate.value = newValue;
  calendarDate.value = newValue;
});
// endregion

// region VALIDATION METHODS
/**
 * Check if date variables are valid.
 */
function isInputValid(): boolean {
  return !(!inputDate.value || !calendarDate.value || inputDate.value !== calendarDate.value);
}

/**
 * Validate the date input field with the input field's rules.
 */
function validate(): boolean {
  return dateInputRef.value.validate();
}

// endregion

defineExpose({
  isInputValid, validate
});

const emit = defineEmits<{
  (e: 'update:date', date: string): void
}>();
</script>
