import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';
import * as moment from 'moment';

export function IsValidDate(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidDate',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const parsedValue = moment(value, 'YYYY-MM-DD');

          return parsedValue.isValid();
        },
      },
    });
  };
}

export function IsNotWeekend(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isNotWeekend',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const parsedValue = moment(value, 'YYYY-MM-DD');

          return !(parsedValue.weekday() === 7 || parsedValue.weekday() === 6);
        },
      },
    });
  };
}

export function IsValidRentRange(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isLongerThan',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          const parsedDate = moment(value, 'YYYY-MM-DD').valueOf();
          const parsedRelatedDate = moment(relatedValue, 'YYYY-MM-DD').valueOf();
          const interval = moment.duration(parsedRelatedDate - parsedDate);

          return interval.asDays() < 30;
        },
      },
    });
  };
}
