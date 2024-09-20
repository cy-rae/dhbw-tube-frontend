import {useI18n} from 'vue-i18n';
import {Locale} from 'src/enums/Locale';

/**
 * This class can be used in a calendar component to provide the locale-specific date options.
 */
export class LocaleDateOption {
  private _i18n = useI18n({useScope: 'global'});

  days: string[];
  daysShort: string[];
  months: string[];
  monthsShort: string[];
  firstDayOfWeek: number;
  format24h: boolean;
  pluralDay: string;

  constructor() {
    this.days = this._i18n.t('date-locale.days').split('_');
    this.daysShort = this._i18n.t('date-locale.days-short').split('_');
    this.months = this._i18n.t('date-locale.months').split('_');
    this.monthsShort = this._i18n.t('date-locale.months-short').split('_');
    this.firstDayOfWeek = 1;
    this.format24h = this._i18n.locale.value === Locale.DE;
    this.pluralDay = this._i18n.t('date-locale.plural-day');
  }
}
