import {useI18n} from 'vue-i18n';
import {date} from 'quasar';
import {IDateService} from 'src/services/date-service/IDateService';

export class DateService implements IDateService {
  private i18n = useI18n();

  getFormattedDate(dateVal: Date): string {
    return date.formatDate(dateVal, this.i18n.t('app.date-format'));
  }
}
