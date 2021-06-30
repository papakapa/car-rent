import * as moment from 'moment';
import { registerDecorator, ValidationOptions } from 'class-validator';
import { WEEKENDS } from '../../enums/days.enum';
import { Date } from '../../../helpers/date';

export function IsNotWeekend(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isNotWeekend',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string) {
          const parsedValue = moment(value, Date.DATE_PATTERN);
          const day = parsedValue.weekday();

          return !WEEKENDS.includes(day);
        },
      },
    });
  };
}
