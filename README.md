## Installation

```bash
$ yarn 
```

## Prerequisites

Необходимо установить PostgreSQL9.

Создать в ней пользователя me, с паролем 1111.

Создать базу данных car.

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Swagger

```bash
 http://localhost:3000/api
```

### Task

1. Произвести расчёт стоимости аренды автомобиля за период
2. Создание сессии аренды автомобиля
3. Сформировать отчёт средней загрузки автомобилей по дням, по каждому авто и по всем автомобилям.

### Условия:
````
Максимальный срок аренды 30 дней.
Пауза между бронированиями должна составлять 3 дня
Начало и конец аренды не может выпадать на выходной день
(суббота, воскресенье).
````
## Database model diagram

![diagram](docs/diagram.PNG)
