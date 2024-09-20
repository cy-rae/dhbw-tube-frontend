import {useI18n} from 'vue-i18n';
import {date} from 'quasar';
import {IDateService} from 'src/services/date-service/IDateService';
import {Locale} from 'src/enums/Locale';

export class DateService implements IDateService {
  private i18n = useI18n();

  // Date constants in the current selected language
  DATE_MASK = () => this.i18n.t('date.mask');
  DATE_FORMAT = () => this.i18n.t('date.format');
  DATE_SHORT_FORMAT = () => this.i18n.t('date.short-format');
  DATE_BACKEND_FORMAT = 'YYYY-MM-DD';

  /**
   * Format a date/time value to a string.
   * @param dateVal Date/Time value
   * @param format Target date/time format as a string
   */
  formatDate(dateVal: Date | undefined | null, format: string = this.DATE_FORMAT()): string {
    if (!dateVal)
      return '';

    return date.formatDate(dateVal, format);
  }

  /**
   * Get the current date/time as a string. Hour appendices are added for German locale.
   * @param dateVal Date/Time value
   * @param format Target date/time format as a string
   */
  getFormattedDate(dateVal: Date | undefined | null, format: string = this.DATE_FORMAT()): string {
    const formattedDate = this.formatDate(dateVal, format);

    if (Locale.DE.includes(this.i18n.locale.value)) {
      return formattedDate + ' Uhr';
    }

    return formattedDate;
  }

  /**
   * Convert a string to a date.
   * @param dateStr Date string
   * @param format Target date format as a string
   */
  stringToDate(dateStr: string | undefined | null, format: string = this.DATE_FORMAT()): Date | null {
    if (!dateStr)
      return null;

    return date.extractDate(dateStr || '', format);
  }
}
