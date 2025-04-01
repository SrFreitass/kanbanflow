import { Pool } from 'pg';

const pool = new Pool({
    host: process.env.HOST_DB,
    database: process.env.KANBANFLOW_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    ssl: true
});

export { pool };