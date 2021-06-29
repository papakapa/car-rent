CREATE TABLE IF NOT EXISTS car (
    id uuid PRIMARY KEY,
    brand VARCHAR(255),
    model VARCHAR(255),
    vin VARCHAR(255),
    gov_number VARCHAR(255)
);
CREATE TABLE IF NOT EXISTS discount (
    id uuid PRIMARY KEY,
    percent INTEGER,
    min_period INTEGER,
    max_period INTEGER
);
CREATE TABLE IF NOT EXISTS rate (
    id uuid PRIMARY KEY,
    price INTEGER,
    distance INTEGER
);
CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY,
    name VARCHAR(255),
    login VARCHAR(255),
    email VARCHAR(255)
);
CREATE TYPE status AS ENUM ('rented', 'started', 'finished');
CREATE TABLE IF NOT EXISTS sessions (
    id uuid PRIMARY KEY,
    start_date DATE,
    end_date DATE,
    car_id uuid REFERENCES car,
    rate_id uuid REFERENCES rate,
    user_id uuid REFERENCES users,
    discount_id uuid REFERENCES discount,
    price INTEGER,
    status status DEFAULT 'rented'
);