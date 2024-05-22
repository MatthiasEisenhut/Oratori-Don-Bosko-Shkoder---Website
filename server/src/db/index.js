import pg from 'pg';

pg.types.setTypeParser(1082, (value) => value);

const pool = new pg.Pool({ ssl: true });

const query = (text, params) => pool.query(text, params);

export { query, pool };
