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
    status status DEFAULT 'rented'
);