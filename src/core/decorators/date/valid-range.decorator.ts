import * as moment from 'moment';
import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';
import { Date } from '../../../helpers/date';

export function IsValidRentRange(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidRentRange',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: string, { constraints, object }: ValidationArguments) {
          const [relatedPropertyName] = constraints;
          const relatedValue = object[relatedPropertyName];
          const parsedDate = Date.formatDate(value);
          const parsedRelatedDate = Date.formatDate(relatedValue);
          const interval = moment.duration(parsedRelatedDate - parsedDate);

          return interval.asDays() < 30;
        },
      },
    });
  };
}
