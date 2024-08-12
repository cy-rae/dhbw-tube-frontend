import { useI18n } from 'vue-i18n';

export class RuleService {
  private i18n = useI18n();

  isSet(value: unknown) {
    return value ? true : this.i18n.t('rule.empty-field');
  }
}
