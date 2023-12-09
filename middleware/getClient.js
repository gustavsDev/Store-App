import postgres from "pg";
const { Client, Pool } = postgres;

export async function getClient() {
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
  });
  const client = await pool.connect();
  return client;
} 
