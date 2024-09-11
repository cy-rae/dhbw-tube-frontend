import {useI18n} from 'vue-i18n';
import {IRuleService} from 'src/services/rule-service/IRuleService';
import {DateService} from 'src/services/date-service/DateService';

export class RuleService implements IRuleService {
  private i18n = useI18n();
  private dateService = new DateService()

  isSet(value: unknown): boolean | string {
    return value ? true : this.i18n.t('rule.empty-field');
  }

  /**
   * Check if the passed date string is a valid date.
   * @param dateStr This date string will be validated.
   */
  isDateStringValid(dateStr: string): true | string {
    const dateVal = this.dateService.stringToDate(dateStr);
    if (dateVal)
      return true;
    else
      return this.i18n.t('validation-text.enter-valid-date')
  }

}
