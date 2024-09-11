export interface IRuleService {
  isSet(value: unknown): boolean | string;

  isDateStringValid(dateStr: string): true | string;
}
