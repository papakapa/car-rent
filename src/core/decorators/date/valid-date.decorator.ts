import * as moment from 'moment';
import { registerDecorator, ValidationOptions } from 'class-validator';
import { Date } from '../../../helpers/date';

export function IsValidDate(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidDate',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: string) {
          const parsedValue = moment(value, Date.DATE_PATTERN);

          return parsedValue.isValid();
        },
      },
    });
  };
}
