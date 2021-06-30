CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE IF NOT EXISTS car (
    id uuid DEFAULT uuid_generate_v4 (),
    brand VARCHAR(255),
    model VARCHAR(255),
    vin VARCHAR(255),
    licensePlate VARCHAR(255),
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS discount (
    id uuid DEFAULT uuid_generate_v4 (),
    percent INTEGER,
    minPeriod INTEGER,
    maxPeriod INTEGER,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS rate (
    id uuid DEFAULT uuid_generate_v4 (),
    price INTEGER,
    distance INTEGER,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS users (
    id uuid DEFAULT uuid_generate_v4 (),
    name VARCHAR(255),
    login VARCHAR(255),
    email VARCHAR(255),
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS sessions (
    id uuid PRIMARY KEY,
    startDate DATE,
    endDate DATE,
    carId uuid REFERENCES car,
    rateId uuid REFERENCES rate,
    userId uuid REFERENCES users,
    discountId uuid REFERENCES discount,
    price INTEGER,
    status VARCHAR(255) DEFAULT 'rented'
);
INSERT INTO car (brand, model, vin, licensePlate) VALUES ('AUDI','A4','NJNJDAS123123NJ','123-GT-97');
INSERT INTO car (brand, model, vin, licensePlate) VALUES ('AUDI','Q7','DJNJKDN3NJNKN2N','331-BB-102');
INSERT INTO car (brand, model, vin, licensePlate) VALUES ('BMW','X5','DJNJKDASDKAKN2N','111-AA-101');
INSERT INTO car (brand, model, vin, licensePlate) VALUES ('BMW','M5','MM322332DKAKN2N','911-FK-111');
INSERT INTO car (brand, model, vin, licensePlate) VALUES ('MERCEDES','CLA','MM32484HGKAKN2N','552-MC-111');
INSERT INTO discount (percent, minPeriod, maxPeriod) VALUES (5, 3, 5);
INSERT INTO discount (percent, minPeriod, maxPeriod) VALUES (10, 6, 14);
INSERT INTO discount (percent, minPeriod, maxPeriod) VALUES (15, 15, 30);
INSERT INTO rate (price, distance) VALUES (270, 200);
INSERT INTO rate (price, distance) VALUES (330, 350);
INSERT INTO rate (price, distance) VALUES (390, 500);
INSERT INTO users (name, login, email) VALUES ('user', 'test', 'test@gmail.com');