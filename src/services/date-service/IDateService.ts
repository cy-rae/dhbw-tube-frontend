export interface IDateService {
  DATE_MASK(): string
  DATE_FORMAT(): string
  DATE_SHORT_FORMAT(): string
  DATE_BACKEND_FORMAT: string

  formatDate(dateVal: Date | undefined | null, format?: string): string;

  getFormattedDate(dateVal: Date | undefined | null, format?: string): string;

  stringToDate(dateStr: string, format?: string): Date | null;
}
