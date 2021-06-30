import * as moment from 'moment';

export namespace Date {
  export const DATE_PATTERN = 'YYYY-MM-DD';

  export const formatDate = (value, pattern = DATE_PATTERN) => moment(value, pattern).valueOf();
}
