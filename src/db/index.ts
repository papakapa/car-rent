import { Client } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'me',
  password: '1111',
  database: 'car',
});

const clientInit = async () => {
  const initSql = fs.readFileSync(path.resolve(__dirname, './scripts/init.sql')).toString();

  await client.connect(err => err && console.log(err));

  await client.query(initSql);
};

export { client, clientInit };
