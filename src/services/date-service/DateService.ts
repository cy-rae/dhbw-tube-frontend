import {useI18n} from 'vue-i18n';
import {date} from 'quasar';
import {IDateService} from 'src/services/date-service/IDateService';
import {Locale} from 'src/enums/Locale';

export class DateService implements IDateService {
  private i18n = useI18n();

  DATE_MASK = () => this.i18n.t('date.mask');
  DATE_FORMAT = () => this.i18n.t('date.format');
  DATE_SHORT_FORMAT = () => this.i18n.t('date.short-format');
  DATE_BACKEND_FORMAT = 'YYYY-MM-DD';

  formatDate(dateVal: Date | undefined | null, format: string = this.DATE_FORMAT()): string {
    if (!dateVal)
      return '';

    return date.formatDate(dateVal, format);
  }

  getFormattedDate(dateVal: Date | undefined | null, format: string = this.DATE_FORMAT()): string {
    const formattedDate = this.formatDate(dateVal, format);

    if (Locale.DE.includes(this.i18n.locale.value)) {
      return formattedDate + ' Uhr';
    }

    return formattedDate;
  }

  /**
   * Convert a date/time string to a date/time value.
   * @param {} dateStr Date/Time as string
   * @returns a date/time object
   */
  stringToDate(dateStr: string | undefined | null, format: string = this.DATE_FORMAT()): Date | null {
    if (!dateStr)
      return null;

    return date.extractDate(dateStr || '', format);
  }
}
