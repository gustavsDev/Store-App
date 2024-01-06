import { handler } from "./build/handler.js";
import dotenv from "dotenv"; dotenv.config();
import cors from "cors";
import express from "express";
import { getClient } from "./middleware/getClient.js"

const PORT = process.env.PORT;

(async () => {
  console.log("Database init.");
  const client = await getClient();
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS items(
      id SERIAL PRIMARY KEY,
      title VARCHAR(255),
      description VARCHAR(4096),
      price INT,
      discount INT,
      amount INT
    );
  `;
  const res = await client.query(createTableQuery);
  console.log("Created table.");
  await client.end();
})();

const app = express();

app.use(cors());
app.use(express.json());

import items from "./routers/items.js";
app.use("/items", items)

app.get("/images/:image", (req, res) => {
  res.sendFile(process.cwd() + "/public/images/" + req.params.image);
});

app.use(handler);
app.listen(PORT, () => console.log(`Port ${PORT} open.`));
