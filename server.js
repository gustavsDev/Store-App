import { handler } from "./build/handler.js";
import dotenv from "dotenv"; dotenv.config();
import cors from "cors";
import express from "express";
import { getClient } from "./middleware/getClient.js"

const PORT = process.env.PORT;

(async () => {
  const client = await getClient();
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS items(
      id SERIAL PRIMARY KEY,
      title VARCHAR(255),
      description VARCHAR(4096)
    );
  `;
  const res = await client.query(createTableQuery);
  console.log(`Created table.`);
  await client.end();
})();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/data", async (req, res) => {
  const client = await getClient();
  const data = await client.query(`SELECT * FROM items;`);
  res.json(data.rows);
});

app.post("/data", async (req, res) => {
  const { title, description } = req.body;

  if(title == undefined || description == undefined) {
    res.json("Undefined values!");
    return;
  }

  const client = await getClient();
  const data = await client.query(`INSERT INTO items(title, description) VALUES ('${title}', '${description}');`);
  res.json("Data inserted!");
});

app.use(handler);
app.listen(PORT, () => console.log(`Port ${PORT} open.`));
