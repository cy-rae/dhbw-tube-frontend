import {useI18n} from 'vue-i18n';
import {date} from 'quasar';
import {IDateService} from 'src/services/date-service/IDateService';
import {Locale} from 'src/enums/Locale';

export class DateService implements IDateService {
  private i18n = useI18n();

  getFormattedDate(dateVal: Date): string {
    const format = this.i18n.t('app.date-format')
    const formattedDate = date.formatDate(dateVal, format);

    if(Locale.DE.includes(this.i18n.locale.value)) {
      return formattedDate + ' Uhr';
    }

    return formattedDate;
  }
}
